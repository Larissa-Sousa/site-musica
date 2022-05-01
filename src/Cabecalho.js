import styles from './Cabecalho.module.css';
import logo from './imagens/logo.png';

function Cabecalho(){
    return(
        <header id="Cabecalho" className={styles.Cabecalho}>
        <div className={styles.Logo}>
          <img src={logo}/>
        </div>
        <nav className={styles.Menu}>
          <a href="#Cabecalho">Home</a>
          <a href="#Compositores">Compositores</a>
          <a href="#Albuns">Álbuns</a>
        </nav>
        </header>
    );
}

export default Cabecalho