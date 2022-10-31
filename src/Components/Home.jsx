import styles from "../Css/Home.module.css"
import { Link } from "react-router-dom"
import Menu_ajuda from './Menu_ajuda'
import code from '../Img/code_barr.png'
import renegociacao from '../Img/renegociacao.png'
import pix from '../Img/pix.png'
import help from '../Img/help.png'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from "./Section4"
import Footer from './Footer'
import debit from '../Img/debit.png'
import flex from '../Img/FLEX.png'
import black from '../Img/BLACK.png'

function Home() {
    return (
        <body>
            <div className={styles.lado_esq}>
                <p>Torne um cliente <br></br>
                    Inscrevendo-se na <br></br>
                    Conta Online sem
                    taxas</p>

                <div className={styles.txts2}>
                    <p>Sem taxa de administração de conta ou manutenção.
                        Sem taxa para emissão de cartão de debito e crédito.</p>
                    <br></br>
                </div>
                <div className={styles.bttn}>
                    <a href="#">Torne-se cliente</a>
                </div>
            </div>
            <div className={styles.menus01}>
                <Menu_ajuda img={code} titulo='Boleto' descricao={'Emita 2ª via de boletos NPX'} />
                <Menu_ajuda img={renegociacao} titulo='Renegociação' descricao={'Peça uma proposta pra renegociar sua dívida'} />
                <Menu_ajuda img={pix} titulo='Pix' descricao={'Cadastre seu CPF e celular'} />
                <Menu_ajuda img={help} titulo='Atendimento' descricao={'Conheça nossos canais de ajuda'} />
            </div>

            <div className={styles.section2}>
                <Section2 />
            </div>

            <div className={styles.section3}>
            <Section3 img={debit} titulo="CARTÃO DEBIT NPX INVEST" descricao={"O cartão NPX Débit é gratuito e conta com os benefícios da conta NPX Débit, como PIX para qualquer banco, saques, depósito por boleto e tag de pedágio. Tudo sem tarifa."} />

            <Section3 img={flex} titulo="CARTÃO FLEX NPX INVEST" descricao={"O cartão NPX Flex é sem anuidade e Acumula 1 ponto a cada R$ 1,00 em compras e troque por descontos ou milhas. Quem antecipa parcelas ganha desconto, direto no app. Simples assim."} />

            <Section3 img={black} titulo="CARTÃO BLACK NPX INVEST" descricao={" O cartão BLACK tem os seguintes requisitos. Renda mínima: R$ 5.000. Anuidade grátis gastando R$4mil em compras por fatura e 2,2 pontos por US$ em compras."} />
            </div>

            <Section4 />
            <Footer />

        </body>

    )

}
export default Home;
