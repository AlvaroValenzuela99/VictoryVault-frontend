import React from 'react';
import Team from '../components/Team';

function Lol() {

  return (
    <div className='App'>
      <h2>League of Legends | Victory Vault</h2>
      <p>Take part in matches in League of Legends with your team.</p>
      <p>Compete against other teams and earn real money!</p>
      
      {/* Renderizado de componente de Equipos */}
      <Team />

      <div className='open-matches'>
        <p>Join a match with your team</p>
        <button>Join HERE</button>
        <p>Entry price: 25€ (Whole team)</p>
        <p>Prize pool: 40€</p>
      </div>

      <div className='active-matches'>
        <p>Ongoing matches</p>
        <p>Time: xx:xx:xx</p>
      </div>
    </div>
  );
}

export default Lol;