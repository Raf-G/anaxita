import React, { Component } from 'react';
import axios from 'axios';

export default class CalculatorListItem extends Component {
    constructor(props) {
        super(props);
        this.state= { 
            activeEdit: false,
            name: this.props.item.name,
            productNum: this.props.item.product_num,
            calorieNum: this.props.item.calorie_num,
            countingType: this.props.item.counting_type
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.editChangeCalorieName = this.editChangeCalorieName.bind(this);
        this.editChangeProductNum = this.editChangeProductNum.bind(this);
        this.editChangeCalorieNum = this.editChangeCalorieNum.bind(this);
        this.editChangeCountingType = this.editChangeCountingType.bind(this);
        this.editAccept = this.editAccept.bind(this);
    }
    handleEdit() {
        this.setState({activeEdit: !this.state.activeEdit})
    }
    editChangeCalorieName(event) {
        this.setState( {name: event.target.value});
    }
    editChangeProductNum(event) {
        this.setState( {productNum: event.target.value});
    }
    editChangeCalorieNum(event) {
        this.setState( {calorieNum: event.target.value});
    }
    editChangeCountingType(event) {
        this.setState( {calorieNum: event.target.value});
    }
    editAccept(e) {
        e.preventDefault();
        try {
            axios({
                method: 'patch',
                // url: 'https://api.calorie-calculator.ru/api/products/' + this.props.item.id + '?/name=' + this.state.name + '&/product_num=' + this.state.productNum + '&/calorie_num=' + this.state.calorieNum + '&/counting_type=' + this.state.countingType,
                url: 'https://api.calorie-calculator.ru/api/products/' + this.props.item.id,
                data: {
                    name: this.state.name,
                    product_num: this.state.productNum,
                    calorie_num: this.state.calorieNum,
                    counting_type: this.state.countingType
                },
                headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem('cacheToken') }
            })
                .then(res => {
                    console.log('Изменение прошло успешно')
                    this.setState({activeEdit: !this.state.activeEdit})
                    return
                })
                .catch(error => {
                    console.log(error.response.data.message);
                })
        }
        catch {
            alert('Ошибка изменения продукта')
        }
    }
    render() {
        const {item, deleteItem} = this.props;
        let itemClass = 'calculator_list_item ';
        if(this.state.activeEdit) {
            itemClass+= ' calculator_list_item_edit_active'
        }
        return (
            <div className={itemClass} key={item.id}>
                <div className="calculator_list_item-show">
                    <p className="calculator_list_item_name">
                        {item.name}
                    </p>
                    <p className="calculator_list_item_kkal">
                        {item.calorie_total} Ккал.
                    </p>
                    <div className="calculator_list_item_btn">
                        <div 
                            className="calculator_list_item_btn_edit"
                            onClick={() => {this.handleEdit()}}
                        ></div>
                        <div className="calculator_list_item_btn_delete"
                            onClick={() => {deleteItem(item.id)}}
                        ></div>
                    </div>
                </div>
                <div className="calculator_list_item-edit">
                    <form 
                        className="calculator_input_wrap"
                        onSubmit={this.editAccept}
                    >
                        <div className="calculator_input">
                            <input 
                                type="text" 
                                placeholder="Что ели?" 
                                value={this.state.name}
                                onChange={this.editChangeCalorieName}
                            />
                        </div>
                        <div className="calculator_input">
                            <input 
                                type="text" 
                                placeholder="Сколько гр." 
                                value={this.state.productNum}
                                onChange={this.editChangeProductNum}
                            />
                        </div>
                        <div className="calculator_input_cal">
                            <input 
                                type="text" 
                                placeholder="Сколько гр."
                                value={this.state.calorieNum}
                                onChange={this.editChangeCalorieNum}
                            />
                            <select 
                                value={item.counting_type}
                                onChange={this.editChangeCountingType}
                            >
                                <option value="0">на 100 гр.</option>
                                <option value="1">на 1 кг.</option>
                            </select>
                        </div>
                        <div className="calculator_list_item-edit_btn">
                            <input className="calculator_list_item-edit_commit" type="submit" value=""/>
                            <div 
                                className="calculator_list_item-edit_btn_close"
                                onClick={() => {this.handleEdit()}}
                            >
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}