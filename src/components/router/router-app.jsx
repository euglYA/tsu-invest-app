import React from "react";
import {HashRouter, Route, Routes} from 'react-router-dom'
import Main from "../pages/main-page";

const guestRoute = (
    <Routes>
        <Route path='/' element={<Main/>}/>
    </Routes>
);

export default function RouterApp(props) {
    let route = guestRoute;

    return (
        <HashRouter>
            <main>
                {route}
            </main>
        </HashRouter>
    );
}