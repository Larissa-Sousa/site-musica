import styles from './Compositores.module.css'
import satie from './imagens/satie.png';
import mozart from './imagens/mozart.png';
import bach from './imagens/bach.png';
import beethoven from './imagens/beethoven.png';

function Compositores(){
    return(
        <div id="Compositores" className={styles.Compositores}>
        <div className={styles.ParteSuperior}>
          <h1>Compositores</h1>
        </div>
        <div className={styles.CompositoresFotos}>
          <div className="Erik">
          <img src={satie}/>
          <h1>Erik Satie</h1>
          </div>
          <div className="Mozart">
          <img src={mozart}/>
          <h1>Mozart</h1>
          </div>
          <div className="Bach">
          <img src={bach}/>
          <h1>Bach</h1>
          </div>
          <div className="Beethoven">
          <img src={beethoven}/>
          <h1>Beethoven</h1>
          </div>
        </div>
      </div>
    );
}

export default Compositores