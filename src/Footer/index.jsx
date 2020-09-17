import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <p className="footer_copyright">
                            (с) 2020 anaxita.ru
                        </p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12">
                        <div className="footer_inst">
                            <a href="/"> </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="footer_quest">
                            <p>По любым вопросам</p>
                            <a href="mailto:info@anaxita.ru">info@anaxita.ru</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;