import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import "./styles.css";

export default class Header extends Component {
    state = {
        activeMenu: false
    }

    // Функция открытия/закрытия мобильного меню
    openMobMenu = () => {
        this.setState({
            activeMenu: !this.state.activeMenu
        })
        console.log(this.state.activeMenu)
    }

    render() {

        let classMenu = 'header_nav';

        // Условия открытия/закрытия мобильного меню
        if (this.state.activeMenu) {
            classMenu += ' header_nav_open'
        }

        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5 col-6">
                            <Link to="/"
                                className="header_logo"
                            >
                                <img src="img/header/logo.png" alt="Logo"/>
                                <p>Calorie<br/>Calculator</p>
                            </Link>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-3 col-6">
                            <div className="header_nav_wrap">
                                <div className="header_nav_menu"
                                    onClick={this.openMobMenu}
                                >
                                </div>
                                <nav className={classMenu}>
                                    <NavLink to="/" exact={true} activeClassName="header_nav_active">
                                        Главная
                                    </NavLink>
                                    <NavLink to="/about" activeClassName="header_nav_active">
                                        О приложении
                                    </NavLink>
                                    <NavLink to="/contact" activeClassName="header_nav_active">
                                        Контакты
                                    </NavLink>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4">
                            <div className="header_right">
                                <a className="header_right_inst" href="/"> </a>
                                <Link to="/authorization"
                                    className="header_authorization"
                                >
                                    Войти
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
