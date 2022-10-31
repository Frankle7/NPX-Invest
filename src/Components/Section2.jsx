import styles from '../Css/Section2.module.css'
import cartao_principal from '../Img/cartao_principal.png'

function Section2() {

    return (

        <div className={styles.comp1}>

            <div className={styles.titulo}>
                <h2>Com a NPX INVEST pagar contas é pratico e rapido</h2>
                <h1>Pague contas com seu cartão</h1>
            </div><br></br><br></br>

            <div className={styles.img_texts}>
                <img src={cartao_principal} alt="cartão-principal" />

                <div className={styles.funcionalidade}>
                    <h3>Nova funcionalidade de credito</h3><br></br><br></br>
                    <h4>Nossa serviço de cartão permite fazer pagamentos de contas com limite de credito na aba cartoes especiais.</h4><br></br>

                    <div className={styles.bttn}>
                        <a href="#">Saber mais</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section2