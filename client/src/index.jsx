import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginApp from './LoginApp';
import SignUpApp from "./SignUpApp";
import ForgotApp from "./ForgotPasswordApp";
import Home from "./components/home/home";
import Message from "./components/message/message";
import Group from "./components/group/group";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<LoginApp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/group" element={<Group />} />
        <Route path="/SignUp" element={<SignUpApp />} />
        <Route path="/login" element={<LoginApp />} />
        <Route path="/forgot-password" element={<ForgotApp />} />
      </Routes>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
