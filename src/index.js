import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';

ReactDOM.render(
  <React.StrictMode> /* faz verificacao dos componentes e seus filhos, para mostrar erros no console e ajuda no ciclo de vida dos componentes */

    <Main/>
  
  </React.StrictMode>,
  document.getElementById('root')
);

