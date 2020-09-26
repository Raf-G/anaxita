import React, { Component } from 'react';
import Header from '../Header';
import СalculatorCalendar from './Сalculator-calendar';
import './styles.css';

export default class Сalculator extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="calculator">
                    <div className="container">
                        <div className="calculator_wrap">
                            <div className="row">
                                <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                    <СalculatorCalendar />
                                    <div className="calculator_more">
                                        <div className="calculator_more_caption">
                                            Подробнее
                                        </div>
                                        <div className="calculator_more_list">
                                            <span>Кол-во продуктов</span>
                                            <span>1</span>
                                        </div>
                                        <div className="calculator_more_list">
                                            <span>Кол-во грамм</span>
                                            <span>1</span>
                                        </div>
                                        <div className="calculator_more_list">
                                            <span>Кол-во каллорий</span>
                                            <span>1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-8 col-md-6 col-sm-12">
                                    <form className="calculator_input_wrap">
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
                                    <div className="calculator_list">
                                        <div className="calculator_list_item">
                                            <div className="calculator_list_item-show">
                                                <p className="calculator_list_item_name">
                                                    Название продукта
                                                </p>
                                                <p className="calculator_list_item_kkal">
                                                    600 Ккал.
                                                </p>
                                                <div className="calculator_list_item_btn">
                                                    <div className="calculator_list_item_btn_edit"></div>
                                                    <div className="calculator_list_item_btn_delete"></div>
                                                </div>
                                            </div>
                                            <div className="calculator_list_item-edit">
                                                <form className="calculator_input_wrap">
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
                                                    <div className="calculator_list_item-edit_btn">
                                                        <input className="calculator_list_item-edit_commit" type="submit" value=""/>
                                                        <div className="calculator_list_item-edit_btn_close"></div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calculator_result">
                                        Всего каллорий: 255
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}