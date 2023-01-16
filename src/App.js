import './App.css';
import ListItem from './ListItem';
import { getRamal } from './RamalService';
import { useEffect, useState } from 'react';

function App() {
  const [ramais, setRamal] = useState([]);
 
  useEffect(() => {
    setRamal(getRamal());
  }, [])
 
  return (
    <div className="create-container">
        {ramais.map(ramal => {
          return (
            <ListItem
              key={ramal.nome}
              nome={ramal.nome}
              numero={ramal.numero}
              setor={ramal.setor}
            />
          )
        })}
      </div>
  );
}
 
export default App;