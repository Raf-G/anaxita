import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';
import './styles.css';

export default class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eye: false,
            email: '', 
            emailValidator: false,
            password: '',
            passwordValidator: false,
            authorizationValidator: false,
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({authorizationValidator: false})
        this.setState({emailValidator: false})
        this.setState({passwordValidator: false})
        if(!validator.isEmail(this.state.email) || !validator.isLength(this.state.password, {min: 6, max: undefined})) {
            if(!validator.isEmail(this.state.email)) {
                this.setState({emailValidator: true})
            }
            if(!validator.isLength(this.state.password, {min: 6, max: undefined})) {
                this.setState({passwordValidator: true})
            }
            console.log(this.state.passwordValidator)
            return;
        }
        try {
            axios.post(`https://api.calorie-calculator.ru/api/signin`, {email: this.state.email, password: this.state.password })
                .then(res => {
                    console.log(res);
                    console.log('Авторизациия прошла успешна')
                    console.log(res.data.token)
                })
                .catch(error => {
                    console.log(error.response.data.message);
                    this.setState({authorizationValidator: true})
                })
            // document.location.href="/";
        }
        catch {
            alert('Ошибка отправки')
        }
        console.log(this.state.passwordValidator)
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
    const {email, password, emailValidator, passwordValidator, authorizationValidator} = this.state;
    

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
                            {emailValidator && <span>Не верно введен email</span>}
                            {passwordValidator && <span>Минимальная длинна пароля 6 символов</span>}
                            {authorizationValidator && <span>Неверный логин или пароль</span>}
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