import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const  [pessoas, setPessoas] = useState(data)
  return <main>
    <section className='container'>
      <h3>Há {pessoas.length} aniversariantes hoje</h3>
        <List pessoas={pessoas} />
     <button onClick={()=> setPessoas([])}>Limpar lista</button>
     <button onClick={()=>atualizar()}>Atualizar lista</button>
    </section>
  </main>;
}

function atualizar(){
    window.location.reload(true)
}

export default App;
