import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/50160019?s=460&u=4d53bfa8ad0795544c7513139e8770f96d907504&v=4" alt="Caio Victor"/>
                        <div>
                            <strong>Caio Victor</strong>
                            <span>Física</span>
                        </div>
                    </header>

                    <p>
                        Bla Bla Bla Bla Bla 
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 60,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>

                </article>
    )        
}

export default TeacherItem;