import React from 'react';

// Componente: Bloco isolado de HTML/CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente filho
// Estado

function Header(props) {
  return (
  <h1>{props.title}</h1>
  );
}

export default Header;
