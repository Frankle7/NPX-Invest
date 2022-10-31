import styles from "../Css/Header.module.css"
import logo from "../Img/logo.png"
import seguranca from "../Img/seguranca.png"
import exite from "../Img/bttSair.png"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div className={styles.logo_npx}>
                <Link to="/">
                    <img src={logo} alt="Logo-npx_invest" />
                </Link>
            </div>

            <div className={styles.navHeader}>
                <img src={seguranca} alt="cadeado-segurança" />
                <p>|</p>

                <div className={styles.agencia}>
                    <label>Agência:</label>
                    <input type="tel" placeholder="ex:4525" className={styles.InputAg} />
                </div>

                <div className={styles.conta}>
                    <label>Conta:</label>
                    <input type="tel" placeholder="ex:1354-9" className={styles.InputAg} />
                </div>
                <div className={styles.acessar}>
                    <p>
                        <Link to="#">LOGIN</Link>
                    </p>
                </div>



                <div className={styles.cxSelecao}>
                    <input type="checkbox" />
                    <label>Lembrar-me</label>
                </div>

                <p>|</p>
                <p>
                    <Link to="/">Cartões </Link>
                </p>

            </div>
        </header>
    )

}
export default Header;
