import React, { useState } from "react";

import "./Contador.css";



const Contador = () => {
  const [contagem, alterarContagem] = useState(0);
  function diminuir() {
    if(contagem > 0)
    alterarContagem(contagem - 1);
  };
  
  function aumentar() {
    alterarContagem(contagem + 1);
  }
  

  return (
    <>
      <div className="content">
      <button onClick={diminuir}>Diminuir</button>
      <div>{contagem}</div>
      <button onClick={aumentar}>Aumentar</button>
      </div>
    </>
  );
}

export default Contador;

