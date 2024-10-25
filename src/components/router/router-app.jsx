import React from "react";
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom'
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
        <BrowserRouter>
            <Sidebar component={route}/>
        </BrowserRouter>
    );
}