import './App.css';
import Cabecalho from './Cabecalho';
import Banner from './Banner';
import Compositores from './Compositores';
import Albuns from './Albuns';
import Rodape from './Rodape';

function App() {
  return (
    <div className="App">
      <main>
        <Cabecalho></Cabecalho>
        <Banner></Banner>
        <Compositores></Compositores>
        <Albuns></Albuns>
        <Rodape></Rodape>
      </main>
    </div>
  );
}

export default App;
