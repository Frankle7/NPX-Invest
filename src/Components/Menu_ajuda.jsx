import styles from '../Css/Menu_ajuda.module.css'

function menu_ajuda({
  img, titulo, descricao
}) {
  return (

    <div className={styles.comp1}>
      <img src={img} alt="codigo-barras" />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>)
}

export default menu_ajuda