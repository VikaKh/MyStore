import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, DATE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, SOME_ROUTE, VIDEO_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import {useAuth0} from "@auth0/auth0-react";
import router from "react-router-dom/es/Router";
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
// const AdminPage = () => {
//     console.log('jffh')
//         router.push('/admin')
// }

    // const logOut = () => {
    //     user.setUser({})
    //     user.setIsAuth(false)
    // }
    const {isAuthenticated, logout} = useAuth0();
    let to;
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Книжный магазин</NavLink>
                {isAuthenticated ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(SOME_ROUTE)}
                            className="ml-2"
                        >
                            Время
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(DATE_ROUTE)}
                            className="ml-2"
                        >
                            Календарь
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(VIDEO_ROUTE)}
                            className="ml-2"
                        >
                            Аудиокнига
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logout()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
