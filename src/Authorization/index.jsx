import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Header extends Component {

    state = {
        eye: false
    }
    // Функция показа/скрытия пароля
    showPassword = () => {
        let typePassword = document.getElementById('authorization_password');
        if (typePassword.type === 'password') {
            typePassword.type = 'text';
        } else {
            typePassword.type = 'password';
        }
        this.setState({
            eye: !this.state.eye
        })
    }
    render () {

    // Условия открытие/закрытие глаза на пароле
    let classEye = 'authorization_form_input_password_eye'
    if (this.state.eye) {
        classEye += ' authorization_form_input_password_eye-close'
    }

    return (
        <div className="authorization">
            <div className="container">
                <form className="authorization_form">
                    <div className="authorization_form_head">
                        <div className="authorization_form_head_logo">
                            <img src="img/Authorization/logo.png" alt="Logo" />
                            <span>Calorie</span> <span>Calculator</span>
                        </div>
                    </div>
                    <div className="authorization_form_wrap">
                        <p className="authorization_form_open">
                            Вход
                        </p>
                        <p className="authorization_form_input_capto">
                            Логин
                        </p>
                        <input className="authorization_form_input" type="text" />
                        <div className="authorization_form_input_password">
                            <p className="authorization_form_input_capto">
                                Пароль
                            </p>
                            <input id="authorization_password" className="authorization_form_input" type="password" />
                            <div className={classEye}
                                onClick={this.showPassword}
                            ></div>
                        </div>
                        <div className="authorization_form_checkbox_wrap">
                            <input id="authorization_form_checkbox" type="checkbox" />
                            <label htmlFor="authorization_form_checkbox">Запомннить меня</label>
                        </div>
                        <input className="authorization_form_submit" type="submit" value="Войти"/>
                        <div className="authorization_form_registr">
                            Нет аккаунта?
                            <Link to="/registration">
                                Зарегистрируйтесь
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
    }
}