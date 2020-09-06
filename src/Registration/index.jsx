import React, { Component } from 'react';

import './styles.css';

export default class Registration extends Component {

    state = {
        eye: false
    }
    // Функция показа/скрытия пароля
    showPassword = () => {
        let typePassword = document.getElementById('registration_password');
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
    let classEye = 'registration_form_input_password_eye'
    if (this.state.eye) {
        classEye += ' registration_form_input_password_eye-close'
    }

    return (
        <div className="registration">
            <div className="container">
                <form className="registration_form">
                    <div className="registration_form_head">
                        <div className="registration_form_head_logo">
                            <img src="img/authorization/logo.png" alt="Logo" />
                            <span>Calorie</span> <span>Calculator</span>
                        </div>
                    </div>
                    <div className="registration_form_wrap">
                        <p className="registration_form_open">
                            Регистрация
                        </p>
                        <p className="registration_form_input_capto">
                            Имя
                        </p>
                        <input className="registration_form_input" type="text" />
                        <p className="registration_form_input_capto">
                            Логин
                        </p>
                        <input className="registration_form_input" type="text" />
                        <div className="registration_form_input_password">
                            <p className="registration_form_input_capto">
                                Пароль
                            </p>
                            <input id="registration_password" className="registration_form_input" type="password" />
                            <div className={classEye}
                                onClick={this.showPassword}
                            ></div>
                        </div>
                        <input className="registration_form_submit" type="submit"  value="Зарегистрироваться"/>
                    </div>
                </form>
            </div>
        </div>
    )
    }
}