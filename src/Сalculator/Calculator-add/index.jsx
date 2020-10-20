import React, { Component } from 'react';
import axios from 'axios';
import './styles.css';

export default class CalculatorAdd extends Component {
    constructor(props) {
        super(props);
        this.state= { 
            name: '',
            productGramm: '',
            calorieNum: '',
            countingType: '0'
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeProductGramm = this.handleChangeProductGramm.bind(this);
        this.handleChangeCalorieNum = this.handleChangeCalorieNum.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
    }
    addItem = (e) => {
        e.preventDefault();
        try {
            axios({
                method: 'post',
                url: 'https://api.calorie-calculator.ru/api/products',
                data: {
                    name: this.state.name,
                    product_num: this.state.productGramm,
                    calorie_num: this.state.calorieNum,
                    counting_type: this.state.countingType
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

    handleChangeName(event) {
        this.setState( {name: event.target.value});
    }
    handleChangeProductGramm(event) {
        this.setState( {productGramm: event.target.value});
    }
    handleChangeCalorieNum(event) {
        this.setState( {calorieNum: event.target.value});
    }
    onChangeType(event) {
        this.setState( {countingType: event.target.value});
        console.log(this.state.countingType)
    }

    render() {
        return (
            <form 
                className="calculator_input_wrap"
                onSubmit={this.addItem}
            >
                <div className="calculator_input">
                    <input 
                        type="text" 
                        placeholder="Что ели?"
                        value= { this.state.name } 
                        onChange = { this.handleChangeName }
                    />
                </div>
                <div className="calculator_input">
                    <input 
                        type="text" 
                        placeholder="Сколько гр."
                        value= { this.state.productGramm } 
                        onChange = { this.handleChangeProductGramm }
                    />
                </div>
                <div className="calculator_input_cal">
                    <input 
                        type="text" 
                        placeholder="Калорий"
                        value= { this.state.calorieNum } 
                        onChange = { this.handleChangeCalorieNum }
                    />
                    <select onChange={this.onChangeType}>
                        <option value="0">на 100 гр.</option>
                        <option value="1">на 1 кг.</option>
                    </select>
                </div>
                <input className="calculator_input_submit" type="submit" value="Добавить"/>
            </form>
        )
    }
}
