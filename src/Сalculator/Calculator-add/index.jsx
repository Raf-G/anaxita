import React, { Component } from 'react';
import axios from 'axios';
import './styles.css';

export default class CalculatorAdd extends Component {
    
    testAdd = () => {
        try {
            axios({
                method: 'post',
                url: 'https://api.calorie-calculator.ru/api/products',
                data: {
                    name: 'Творог',
                    product_num: '24',
                    calorie_num: '2323',
                    counting_type: '0'
                },
                headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem('cacheToken') }
            })
                .then(res => {
                    console.log('Добавление прошло успешно')
                })
                .catch(error => {
                    console.log(error.response.data.message);
                })
        }
        catch {
            alert('Ошибка отправки')
        }
    }

    render() {
        return (
            <form className="calculator_input_wrap">
                <div onClick={this.testAdd}
                >Тестовая кнопка</div>
                <div className="calculator_input">
                    <input type="text" placeholder="Что ели?"/>
                </div>
                <div className="calculator_input">
                    <input type="text" placeholder="Сколько гр."/>
                </div>
                <div className="calculator_input_cal">
                    <input type="text" placeholder="Сколько гр."/>
                    <select>
                        <option>на 100 гр.</option>
                        <option>на 1 кг.</option>
                    </select>
                </div>
                <input className="calculator_input_submit" type="submit" value="Добавить"/>
            </form>
        )
    }
}
