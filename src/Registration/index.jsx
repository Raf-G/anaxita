import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';
import './styles.css';

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eye: false,
            name: '', 
            nameValidator: false,
            email: '', 
            emailValidator: false,
            password: '',
            passwordValidator: false,
            registrationValidator: false,
            registrationValidatorText: ''
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeName(event) {
        this.setState({ name: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({nameValidator: false})
        this.setState({emailValidator: false})
        this.setState({passwordValidator: false})
        this.setState({registrationValidator: false})
        if(!validator.isLength(this.state.name, {min:3, max: 15}) || !validator.isEmail(this.state.email) || !validator.isLength(this.state.password, {min: 6, max: undefined})) {
            if(!validator.isLength(this.state.name, {min:3, max: 15})) {
                this.setState({nameValidator: true})
            }
            if(!validator.isEmail(this.state.email)) {
                this.setState({emailValidator: true})
            }
            if(!validator.isLength(this.state.password, {min: 6, max: undefined})) {
                this.setState({passwordValidator: true})
            }
            return
        }
        try {
            axios.post(`https://api.calorie-calculator.ru/api/adduser`, { name: this.state.name, email: this.state.email, password: this.state.password })
                .then(res => {
                    console.log(res);
                    console.log(res.statusText)
                })
                .catch((error) => {
                    console.log(error.response.data.message);
                    this.setState({
                        registrationValidator: true,
                        registrationValidatorText: error.response.data.message
                    })
                })
            console.log('Регестрация прошла успешна')
            // document.location.href="/";
        }
        catch {
            alert('Ошибка отправки')
        }
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
    render() {
        const {name, email, password, nameValidator, emailValidator, passwordValidator, registrationValidator, registrationValidatorText} = this.state;

        let classEye = 'registration_form_input_password_eye'
        if (this.state.eye) {
            classEye += ' registration_form_input_password_eye-close'
        }

        return (
            <div className="registration">
                <div className="container">
                    <form 
                        className="registration_form"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="registration_form_head">
                            <Link to="/" className="registration_form_head_logo">
                                <img src="img/authorization/logo.png" alt="Logo" />
                                <span>Calorie</span> <span>Calculator</span>
                            </Link>
                        </div>
                        <div className="registration_form_wrap">
                            <p className="registration_form_open">
                                Регистрация
                            </p>
                            <p className="registration_form_input_capto">
                                Имя
                            </p>
                            <input 
                                className="registration_form_input" 
                                type="text"
                                autoComplete="off"
                                value={name}
                                onChange={this.handleChangeName}
                            />
                            <p className="registration_form_input_capto">
                                Email
                            </p>
                            <input 
                                className="registration_form_input" 
                                type="text" 
                                autoComplete="off"
                                value={email}
                                onChange={this.handleChangeEmail}
                            />
                            <div className="registration_form_input_password">
                                <p className="registration_form_input_capto">
                                    Пароль
                            </p>
                                <input 
                                    id="registration_password" 
                                    className="registration_form_input" 
                                    type="password"
                                    autoComplete="off"
                                    value={password}
                                    onChange={this.handleChangePassword}
                                />
                                <div className={classEye}
                                    onClick={this.showPassword}
                                ></div>
                                <div className='registration_form_error'></div>
                            </div>
                            <div className="registration_error">
                            {nameValidator && <span>Имя должно содержать от 3 до 15 символов</span>}
                            {emailValidator && <span>Не верно введен email</span>}
                            {passwordValidator && <span>Минимальная длинна пароля 6 символов</span>}
                            {registrationValidator && <span>{registrationValidatorText}</span>}
                            </div>
                            <input className="registration_form_submit" type="submit" value="Зарегистрироваться" />
                            <div className="registration_form_registr">
                                Есть аккаунт ?&ensp;
                                <Link to="/authorization">
                                    Войти
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}