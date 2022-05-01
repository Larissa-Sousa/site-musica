import styles from './Albuns.module.css';
import album1 from './imagens/album-1.png';
import album2 from './imagens/album-2.png';
import album3 from './imagens/album-3.png';
import album4 from './imagens/album-4.png';
import album5 from './imagens/album-5.png';
import album6 from './imagens/album-6.png';

function Albuns(){
    return(
        <div id="Albuns" className={styles.Albuns}>
          <div className={styles.ParteSuperior2}>
            <h1>Álbuns</h1>
          </div>
          <div className={styles.Linha1}>
            <div className="album1">
            <img src={album1}/>
            <p>Erik Satie<br />and Friends</p>
            </div>
            <div className="album2">
            <img src={album2}/>
            <p>Mozart – Masters<br />Of Classical Music</p>
            </div>
            <div className="album3">
            <img src={album3}/>
            <p>Glenn Gould<br />plays Bach</p>
            </div>
          </div>
          <div className={styles.Linha2}>
            <div className="album4">
            <img src={album4}/>
            <p>Beethoven - Kodály<br /> Quartet</p>
            </div>
            <div className="album5">
            <img src={album5}/>
            <p>Camille Saint -<br />Organ Symphony</p>
            </div>
            <div className="album6">
            <img src={album6}/>
            <p>Claude Debussy –<br />Piano Music Vol. IV</p>
            </div>
          </div>
        </div>
    );
}

export default Albuns