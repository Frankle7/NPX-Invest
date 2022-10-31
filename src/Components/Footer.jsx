import styles from "../Css/Footer.module.css"
import face from '../Img/Face.png'
import insta from '../Img/instag.png'
import twiter from '../Img/Twietter.png'
import seta from '../Img/seta.png'
import win from '../Img/windons.png'
import android from '../Img/android.png'
import mac from '../Img/mac.png'





function Footer() {
    return (
        <footer className={styles.containerRodape}>
            <div className={styles.rodape}>
                <div className={styles.coluna1}>
                    <div className={styles.cx_txts}>
                        <p>
                            Trabalhe conosco e faça parte do nosso time campeão.
                            <img src={seta} alt="seta-bttn" />
                        </p>
                    </div>

                    <div className="Redes_Sociais">
                        <h2>Redes Sociais</h2>
                        <div className={styles.img_logos}>
                            <img src={face} alt="Logo-face" />
                            <img src={insta} alt="Logo-insta" />
                            <img src={twiter} alt="Logo-twitter" />
                        </div>
                    </div>

                </div>

                <article className={styles.coluna2}>
                    <h4>
                        Documentos importantes
                    </h4>

                    <h4>
                        Abrir Conta digital
                    </h4>

                    <h4>
                        Emitir 2ª via de boleto
                    </h4>

                    <h4>
                        Conrrespondeente Bancario
                    </h4>

                    <h4>
                        Cartões de credito
                    </h4>
                </article>

                <article className={styles.coluna2}>
                    <h4>
                        Segurança importantes
                    </h4>

                    <h4>
                        Politica de Privacidade
                    </h4>

                    <h4>
                        Serviços online
                    </h4>

                    <h4>
                        Imprensa
                    </h4>

                    <h4>
                        Telefones Úteis
                    </h4>
                </article>

                <section className="Danwloands">
                    <div className={styles.img_Danwloands}>
                        <img src={win} alt="Logo-win" />
                        <img src={android} alt="Logo-android" />
                        <img src={mac} alt="Logo-mac" />
                    </div>
                    <div className={styles.txt}>
                        <span>Escolha seu sistema e Baixe seu app.</span>
                    </div>
                </section>
            </div>

            <section className={styles.consideracao}>
                <p>
                    NPX INVEST S.A. (“NPX”), instituição financeira, inserida sob o CNPJ nº 55.055.414/0001-00, com sede na Avenida Raquel Sheherazade nº 1515, 21º andar, Arraial,Santa Lucia  - SP.
                </p>
            </section>
        </footer>
    )
}

export default Footer