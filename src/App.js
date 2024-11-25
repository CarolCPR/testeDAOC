import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="App">
      <div className="profile-card">
        <h1 className="profile-name">Kamylla da Silva Santos</h1>
        <p className="profile-course">Curso: Análise e Desenvolvimento de Sistemas</p>
        
        <button className="toggle-button" onClick={toggleShowMore}>
          {showMore ? 'Menos Informações' : 'Mais Informações'}
        </button>
        
        {showMore && (
          <div className="extra-info">
            <p>
            Sou graduanda em Análise e Desenvolvimento de Sistemas e trabalho na área de sustentabilidade, onde realizo inventários de emissões de gases de efeito estufa. Minha atuação é voltada para o monitoramento e redução dos impactos ambientais, promovendo práticas sustentáveis que contribuem para a preservação do meio ambiente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
