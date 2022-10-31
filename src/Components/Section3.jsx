import styles from "../Css/Section3.module.css"

function Section3(
    {
        img, titulo, descricao
    }
) {

    return (
        <section className={styles.section3_3}>
            <div className={styles.debito}>

                <div className={styles.img_cartao1}>
                    <img src={img} alt="cartão-principal" />
                </div>

                <h1>{titulo}</h1>
                <p>{descricao}.</p>
            </div>

            <div className={styles.btt}>
                <a href="#">Torne-se cliente</a>
            </div>
        </section>

    )
}

export default Section3