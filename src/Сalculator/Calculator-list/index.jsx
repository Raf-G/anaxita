import React, { Component } from 'react';
import axios from 'axios';
import './styles.css';

export default class CalculatorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: []
        };
    }

    componentDidMount() {
        try {
            axios({
                method: 'GET',
                url: 'https://api.calorie-calculator.ru/api/products',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('cacheToken') }
            })
                .then(res => {
                    console.log('Список продуктов получен')
                    this.setState({ listItems: res.data.data })
                })
                .catch(error => {
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
        const renderCards = this.state.listItems.map(item => (
            <div className="calculator_list_item" key={item.id}>
                <div className="calculator_list_item-show">
                    <p className="calculator_list_item_name">
                        {item.name}
                                        </p>
                    <p className="calculator_list_item_kkal">
                        {item.calorie_total} Ккал.
                                        </p>
                    <div className="calculator_list_item_btn">
                        <div className="calculator_list_item_btn_edit"></div>
                        <div className="calculator_list_item_btn_delete" 
                            // onClick={this.deleteItem}
                            onClick={() => { this.deleteItem(item.id) }}
                        ></div>
                    </div>
                </div>
                <div className="calculator_list_item-edit">
                    <form className="calculator_input_wrap">
                        <div className="calculator_input">
                            <input type="text" placeholder="Что ели?" />
                        </div>
                        <div className="calculator_input">
                            <input type="text" placeholder="Сколько гр." />
                        </div>
                        <div className="calculator_input_cal">
                            <input type="text" placeholder="Сколько гр." />
                            <select>
                                <option>на 100 гр.</option>
                                <option>на 1 кг.</option>
                            </select>
                        </div>
                        <div className="calculator_list_item-edit_btn">
                            <input className="calculator_list_item-edit_commit" type="submit" value="" />
                            <div className="calculator_list_item-edit_btn_close"></div>
                        </div>
                    </form>
                </div>
            </div>
        ));

        return (
            <div className="calculator_list">
                {renderCards}
            </div>
        )
    }
}