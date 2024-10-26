import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from "../pages/main";
import Sidebar from "../sidebar/sidebar";
import NotFound from "../pages/not-found";
import Contacts from "../pages/contacts";

const guestRoute = (
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
);

export default function RouterApp(props) {
    let route = guestRoute;

    return (
        <BrowserRouter basename="/tsu-invest-app">
            <Sidebar component={route}/>
        </BrowserRouter>
    );
}