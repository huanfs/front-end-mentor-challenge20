
import './App.css';
/*components*/
import Image from "./components/image";
/*images*/
import avatar from "./images/image-avatar.png";
import iconEthereum from "./images/icon-ethereum.svg";
import iconClock from "./images/icon-clock.svg";
function App() {
  return (
    <div className="App">
      <Image/>
      <h1>equilibrioum #3429</h1>
      <p>our equilibrium collection promotes balance, and calm</p>
      <article className="chart">
        <div className="price">
          <img src={iconEthereum}></img>
          <h2>0.041ETH</h2>
        </div>
        <div className="timeLeft">
          <img src={iconClock}></img>
          <h3>3 Days Left</h3>
        </div>
      </article>
      <footer>
        <img src={avatar}></img>
        <p>creation of <span>Huan Figuereido</span></p>
      </footer>
    </div>
  );
}

export default App;
