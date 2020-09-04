import React from 'react';

import './styles.css';

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="home_text">
                    <h1>Калькулятор<br/>Калорий</h1>
                    <ul className="home_text_list">
                        <li>Записывай съеденные продукты</li>
                        <li>Считай калории</li>
                        <li>Общайся на интересные темы</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;