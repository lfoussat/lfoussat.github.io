import logo from './logo.svg';
import arrow from './arrow.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header flexColumn_s">
        <div className="photo-intro w100p_s" />
        <div className="intro w100p_s">
          <img src={logo} className="App-logo" alt="logo" />
            <h1>
              <span className="purple">Louise & Rafael</span><br/>
              11 avril 2026
            </h1>
        </div>
      </header>
      <div className="infos beige">
        <p>On est trop content avec Rafael et Camille de vous inviter tous à notre mariage</p>
        <p>La cérémonie aura lieu le samedi 11 avril au matin à la <a
          href="https://maps.app.goo.gl/reFnfpeiJ6ka9bPx7"
          target="_blank"
          rel="noopener noreferrer"
        >mairie de Saint Gilles</a> (71510)</p>
        <p>💒✨💍</p>
        <p>É com muito prazer que gostaríamos de convidá-los todos pelo nosso casamento</p>
        <img src={arrow} className="arrow arrow_s" alt="arrow" />
        <p>A ceremonia será sábado 11 de abril, no período da manhã, na <a
          href="https://maps.app.goo.gl/reFnfpeiJ6ka9bPx7"
          target="_blank"
          rel="noopener noreferrer"
        >câmara municipal de Saint Gilles (71510)</a></p>
      </div>
      <div className="stgilles" />
      <div className="flexRow flexColumn_s w100p">
        <div className="bgMauve wthird beige w100p_s">
          <div className="p50px">
            <h3>TGV/trem rápido</h3>
            <a href="https://maps.app.goo.gl/GVbWaZS4VhhxZR4G7" target="_blank" rel="noopener noreferrer">Le Creusot – Montceau – Montchanin TGV</a>
          </div>
        </div>
        <div className="bgBeige wthird purple w100p_s">
          <div className="p50px">
            <h3>TER/trem lento</h3>
            <a href="https://maps.app.goo.gl/aoRmKAZ2rXGyH3Ne8" target="_blank" rel="noopener noreferrer" className="purple">Beaune</a>
          </div>
        </div>
        <div className="bgGreen wthird purple w100p_s">
          <div className="p50px">
            <h3>AVION AVIÃO</h3>
            <a href="https://maps.app.goo.gl/kvoaRBdNW9nnx5NF7" target="_blank" rel="noopener noreferrer" className="purple">Aeroporto de Lyon LYS</a>
            <p>Aeroporto de Paris (+ trem)</p>
          </div>
        </div>
      </div>
      <div className="w100p flexRow flexColumn_s">
      <div className="cover restaurant beige w50p">
        <div className="p50px">
          <p>Après avoir dit <span className="parisienne">OUI</span>, on ira tous déjeuner dans un restaurant, puis on continuera les festivités dans un gîte à <a
          href="https://maps.app.goo.gl/QS1Qo87c8xAAQjYi8"
          target="_blank"
          rel="noopener noreferrer"
        >Chassagne montrachet</a></p>
          <p className="rose bold">On aura besoin de vos confirmations pour le restaurant le <span className="underline">19 février</span> au plus tard (avec vos potentielles <span className="underline">allergies</span>)</p>
        </div>
      </div>
      <div className="cover festivities beige w50p">
        <div className="p50px">
          <p>Depois do <span className="parisienne">SIM</span>, convidamos todos para almoçar em um restaurante, e continuaremos as festividades numa pousada em <a
          href="https://maps.app.goo.gl/QS1Qo87c8xAAQjYi8"
          target="_blank"
          rel="noopener noreferrer"
        >Chassagne montrachet</a></p>
          <p className="rose bold">Vamos precisar da confirmação de todos (quem vem ou não) no máximo até ao dia <span className="underline">19 de fevereiro</span> pela reserva do restaurante (com as suas <span className="underline">alergias)</span>!</p>
        </div>
      </div>
    </div>
    <div className="infos beige">
      <p>Votre présence à notre mariage est le plus beau cadeau pour nous. Si vous souhaitez également nous offrir un cadeau ou contribuer à notre voyage de noces, on en sera très heureux :)</p>
      <p>Sua presença ao nosso casamento é o presente mais lindo para nós. Se você também quiser nos presentear ou contribuir para nossa lua de mel, ficaremos muito gratos :)</p>
      <p className="parisienne">IBAN: FR76 3000 4005 7500 0003 3832 110</p>
    </div>
    </div>
  );
}

export default App;
