import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';
import './styles.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eye: false,
            email: '', 
            emailValidator: false,
            password: '',
            passwordValidator: false
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value, emailValidator: validator.isEmail(this.state.email) });
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value, passwordValidator: validator.isLength(this.state.password, {min: 6, max: undefined})});
    }
    handleSubmit(event) {
        event.preventDefault();
        // !!! Заменить переключение классов написанное нативным JS на React !!!
        if(!validator.isEmail(this.state.email) || !validator.isLength(this.state.password, {min: 6, max: undefined})) {
            if(!validator.isEmail(this.state.email)) {
                document.querySelector('.authorization_error_email').style.display = 'block';
            } else {
                document.querySelector('.authorization_error_email').style.display = 'none';
            }
            if(!validator.isLength(this.state.password, {min: 6, max: undefined})) {
                document.querySelector('.authorization_error_password').style.display = 'block';
            } else {
                document.querySelector('.authorization_error_password').style.display = 'none';
            }
            return;
        }
        try {
            axios.post(`https://api.calorie-calculator.ru/api/signin`, {email: this.state.email, password: this.state.password })
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error.message);
                })
            console.log('Авторизациия прошла успешна')
            // document.location.href="/";
        }
        catch {
            alert('Ошибка отправки')
        }
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
    const {email, password} = this.state;

    // Условия открытие/закрытие глаза на пароле
    let classEye = 'authorization_form_input_password_eye'
    if (this.state.eye) {
        classEye += ' authorization_form_input_password_eye-close'
    }

    return (
        <div className="authorization">
            <div className="container">
                <form onSubmit={this.handleSubmit} className="authorization_form">
                    <div className="authorization_form_head">
                        <Link to="/" className="authorization_form_head_logo">
                            <img src="img/authorization/logo.png" alt="Logo" />
                            <span>Calorie</span> <span>Calculator</span>
                        </Link>
                    </div>
                    <div className="authorization_form_wrap">
                        <p className="authorization_form_open">
                            Вход
                        </p>
                        <p className="authorization_form_input_capto">
                            Email
                        </p>
                        <input 
                            className="authorization_form_input" 
                            type="text" 
                            autoComplete="off"
                            value={email}
                            onChange={this.handleChangeEmail}
                        />
                        <div className="authorization_form_input_password">
                            <p className="authorization_form_input_capto">
                                Пароль
                            </p>
                            <input 
                                id="authorization_password" 
                                className="authorization_form_input" 
                                type="password"
                                autoComplete="off"
                                value={password}
                                onChange={this.handleChangePassword}
                            />
                            <div className={classEye}
                                onClick={this.showPassword}
                            ></div>
                        </div>
                        <div className="authorization_error">
                            <span className="authorization_error_name">Неверный логин или пароль</span>
                            <span className="authorization_error_email">Не верно введен email</span>
                            <span className="authorization_error_password">Минимальная длинна пароля 6 символов</span>
                        </div>
                        <input className="authorization_form_submit" type="submit" value="Войти"/>
                        <div className="authorization_form_registr">
                            Нет аккаунта ?&ensp;
                            <Link to="/registration">
                                Зарегистрироваться
                            </Link><br/>
                            <Link to="/">
                                Забыли пароль ?
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
    }
}