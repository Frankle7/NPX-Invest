import React from 'react'
import styles from "../Css/Section4.module.css"
import logo_3 from "../Img/logo_3.png"

function Section4() {
    return (
        <section>
            <div className={styles.Section4}>

            <div className={styles.txts_esq}>
                    <h1>NPX INVEST</h1>

                    <p>Seja você mesmo seu acessor de investimentos. Seu dinheiro, suas escolhas, faça no conforto da sua casa, sem depender de ninguem.</p>

                    <button>
                        <a href="">Saiba mais</a>
                    </button>
                </div>
                
                <img src={logo_3} alt="logo_3" />
            </div>
        </section>
    )
}

export default Section4