import React, { Component } from 'react';
import axios from 'axios';
import CalculatorListItem from './Calculator-list-item';
import './styles.css';

export default class CalculatorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: []
        };
    }

    componentDidMount() {
        let currentDate = new Date().toLocaleString().split(",")[0]
        try {
            axios({
                method: 'GET',
                url: 'https://api.calorie-calculator.ru/api/products?date=' + currentDate,
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('cacheToken') }
            })
                .then(res => {
                    console.log('Список продуктов получен')
                    console.log(res.data.data)
                    this.setState({ listItems: res.data.data })
                })
                .catch(error => {
                    console.log('Список продуктов не получен')
                    console.log(error.response.data.message);
                })
        }
        catch {
            alert('Ошибка отправки')
        }
    }

    deleteItem = (id) => {
        console.log(id)
        this.setState(({ listItems }) => {
            const idx = listItems.findIndex((item) => item.id === id);
            try {
                axios({
                    method: 'DELETE',
                    url: 'https://api.calorie-calculator.ru/api/products/' + id,
                    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('cacheToken') }
                })
                    .then(res => {
                        console.log('Продукт удален')
                        console.log(res)
                    })
                    .catch(error => {
                        console.log(error.response);
                    })
            }
            catch {
                console.log('Ошибка удаления.')
                console.log(listItems)
            }

            const newArray = [
                ...listItems.slice(0, idx),
                ...listItems.slice(idx)
            ];
            // Обновление списка
            return {
                listItems: newArray
            };
        })
    };

    render() {
        if(this.state.listItems) {
            var product = this.state.listItems.map(item => {
                return (
                    <CalculatorListItem key={item.id}
                        item={item}
                        deleteItem={this.deleteItem}
                    />
                )
            });
        } else {
            return(
                <div className="calculator_list_item_none">
                    Список продуктов пуст
                </div>
            )
        }

        return (
            <div className="calculator_list">
                {product}
            </div>
        )
    }
}