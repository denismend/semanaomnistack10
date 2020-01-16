import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

// Componente: Bloco isolado de HTML/CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente filho
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
        const response = await api.get('/devs');
        setDevs(response.data);
    }

    loadDevs();
}, []);

  /*const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }*/

  async function handleAddDev(data) { 
    const response = await api.post('./devs', data);

    console.log(response.data);

    setDevs([...devs, response]);
  }

  return (
    /*<>
     <h1>Contador: {counter}</h1>
     <button onClick={incrementCounter}>Incrementar</button>
    </>
    */
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
         
        </ul>
      </main>
    </div>

  );
}

export default App;
