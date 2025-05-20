import express from "express";
import bcrypt from "bcryptjs";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import pg from "pg";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";

const app = express();
const port = process.env.PORT || 5000;
const saltRounds = 10;
let currentID = undefined;
let db = undefined;
env.config();

app.use(cors({
    origin: 'https://acebook-theta.vercel.app',
    credentials: true
}));

// app.options('*', cors({
//   origin: 'https://acebook-theta.vercel.app',
//   credentials: true
// }));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "https://acebook-theta.vercel.app");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        // sameSite: 'lax',
        sameSite: 'none',  // Allow cross-origin cookies
        secure: true  
    }
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

function database(databases) {
  return db = new pg.Client({
      user: process.env.PG_USER,
      host: process.env.PG_HOST,
      database: databases,
      password: process.env.PG_PASSWORD,
      port: process.env.PG_PORT,
  });
}

// const db = new pg.Client({
//     user: process.env.PG_USER,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE_USERS,
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT,
// });
// db.connect();

app.get ("/authorize", (req, res) => {
    console.log(req.user);
    if (req.isAuthenticated()) {
        res.json({message: "Success"});
    } else {
        res.json({message: "Unauthorized"});
    }
});

app.get ("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.json({message: "Logout"});
    })
});

app.get ("/names/friends", async (req, res) => {
  database();
  db.connect();

  const result = await db.query ("SELECT * FROM friends WHERE id = $1", [currentID]);
  res.json({friends: result.rows})
});

app.post('/api/submit-form', async (req, res) => {
    database(process.env.PG_DATABASE_USERS);
    db.connect();
    const userData = req.body;
    const password = userData.password;
    const date = [userData.day, userData.month, userData.year].join("/");

    bcrypt.hash(userData.email, saltRounds, (err, ehash) => {
        if (err) {
            console.error("Error hashing id:", err);
        } else {
            bcrypt.hash(password, saltRounds, async (err, hash) => {
                if (err) {
                    console.error("Error hashing password:", err);
                } else {            
                    try {
                        const result = await db.query(
                            "INSERT INTO details (fname, lname, dob, gender, email, password, userid) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
                            [userData.fname, userData.sname, date, userData.gender, userData.email, hash, ehash]
                        );
                        try {
                          await db.query("CREATE DATABASE $1", [ehash]);
                          database(ehash);
                          db.connect();
                          await db.query("CREATE TABLE friends (friendid VARCHAR(100) PRIMARY KEY, name VARCHAR(100), messagetally INT)");
                          await db.query("CREATE TABLE messages (messageid VARCHAR(100) PRIMARY KEY, replyid VARCHAR(100), attachment BYTEA, url TEXT, status VARCHAR(100), time TIME, day VARCHAR(20))");
                          await db.query("CREATE TABLE usergroup (groupid VARCHAR(100) PRIMARY KEY, name VARCHAR(100), grouptally INT, status VARCHAR(12), role VARCHAR(24))");
                        } catch (err) {
                          console.log ("ommoooo ohh", err)
                        }
                        const user = result.rows[0];
                        req.login(user, (err) => {
                            res.json({ message: "Success"}); 
                        });
                    } catch (error) {
                        console.error(error.detail);
                        const errorMessage = `Key (email)=(${userData.email}) already exists.`;
                        error.detail === errorMessage && res.json({ message: "Account already exists"});
                    }
                }
            });
        };
    });
});

app.post('/api/login-form', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) {
            // res.status(401).json({ message: info?.message || 'Login failed' });
          return res.json({ message: info?.message || 'Login failed' });
        } else {
            // return res.json({message: "Success"});
            req.logIn (user, (err) => {
                res.json({message: "Success"})
            });
        }
    })(req, res, next);
});

passport.use(
  "local",
  new Strategy({ usernameField: 'email' }, async function verify(email, password, cb) {
    database(process.env.PG_DATABASE_USERS);
    db.connect();
    try {
      const result = await db.query("SELECT * FROM details WHERE email = $1 ", [
        email,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (err, valid) => {
          if (err) {
            console.error("Error comparing passwords:", err);
            return cb(err);
          } else {
            if (valid) {
                return cb(null, user);
            } else {
                return cb(null, false, { message: 'Incorrect Password' });
            }
          }
        });
      } else {
        return cb(null, false, {message: "Not User"});
      }
    } catch (err) {
      console.log(err);
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user.userid);
});

passport.deserializeUser((id, cb) => {
  const user = id;
  cb(null, user);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });