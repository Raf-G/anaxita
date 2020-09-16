import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import axios from 'axios';

const Contact = () => {
    
    function clickText() {
        let config = {
            headers: {
            'Content-Type':  'application/json',
            // 'Access-Control-Allow-Origin': '*'    
            'Access-Control-Request-Headers': 'Special-Request-Header',
            mode: 'no-cors' 
            }
          }
        // const user = {
        //     name: 'ИмяПРишло',
        //     email: 'test@mail.ru',
        //     password: 'passswowqeq'

        // };
        axios.get(`https://api.anaxita.ru/adduser`, { }, config)
            .then(res => {
                console.log(res);
        })
    }


    return (
        <div>
            <Header />
            Контактыыыыыы

            <div
                onClick={clickText}
            >
                asdasdasdo'asd;oasjd;oasjd;laskdj
            </div>

            <Footer />
        </div>
    )
}

export default Contact;