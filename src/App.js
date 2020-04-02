import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //Definir la categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([])

  //Consulta a la api
  useEffect(() => {

    const consultarAPI = async () => {
      console.log(categoria)
      const url= `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=3f0e9eb7599b43c78df8b2d725d19b24`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    }

    consultarAPI();

  }, [categoria])


  return (
    <Fragment>
      <Header
        titulo='Buscador de noticias'
      />

      <div className="container white">
        <h1>Noticias</h1>
        <Formulario
          setCategoria={setCategoria} />

          <ListadoNoticias 
          noticias={noticias}/>
      </div>
    </Fragment>
  );
}

export default App;
