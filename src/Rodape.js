import styles from './Rodape.module.css'
import facebook from './imagens/facebook-logo-branco-1.png';
import instagram from './imagens/instagram-logo-branco-1.png';
import twitter from './imagens/twitter-logo-branco-1.png';
import nota from './imagens/nota-musical.png';

function Rodape(){
    return(              
        <footer className={styles.Rodape}>
          <div className={styles.Politicas}>
            <p>Política de Privacidade</p>
            <p>Política de Cookies</p>
            <p>Termos de uso</p>
          </div>
          <div className={styles.Redes}>
            <p>Redes Sociais:</p>
            <div className={styles.RedesImg}>
              <img src={facebook}/>
              <img src={instagram}/>
              <img src={twitter}/>
            </div>
          </div>
          <div className={styles.Direitos}>
            <img src={nota}/>
            <p>Todos os direitos reservados.</p>
          </div>     
        </footer>
    );
}

export default Rodape