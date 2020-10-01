import React, { Component } from 'react';
import Header from '../Header';
import СalculatorCalendar from './Сalculator-calendar';
import CalculatorAdd from './Calculator-add';
import CalculatorList from './Calculator-list';
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
                                    <CalculatorAdd />
                                    <CalculatorList />
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