import styles from './Banner.module.css'
import banner from './imagens/banner.png';

function Banner(){
    return(
        <div className={styles.Imagem1}>
        <img src={banner}/>
        </div>
    );
}

export default Banner