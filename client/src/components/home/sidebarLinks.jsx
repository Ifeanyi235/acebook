import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TheatersIcon from '@mui/icons-material/Theaters';

const links = [
    {
        icon: <AccountCircleIcon />,
        text: 'User',
        action: 'hide'
    },
    {
        icon: <GroupIcon />,
        text: 'Friends',
        action: 'hide'
    },
    {
        icon: <img src="./images/a-logo.png"/>,
        text: 'Welcome',
        action: 'hide'
    },
    {
        icon: <BookmarkIcon />,
        text: 'Saved',
        action: 'saved'
    },
    {
        icon: <OndemandVideoIcon />,
        text: 'Videos',
        action: 'video'
    },
    {
        icon: <BookmarkIcon />,
        text: 'Photos',
        action: 'photo'
    },
]

export default links;