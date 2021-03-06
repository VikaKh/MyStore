import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    const {  isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    // useEffect(() => {
    //     check().then(data => {
    //         user.setUser(true)
    //         user.setIsAuth(true)
    //     }).finally(() => setLoading(false))
    // }, [])

    // if (loading) {
    //     return <Spinner animation={"grow"}/>
    // }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
