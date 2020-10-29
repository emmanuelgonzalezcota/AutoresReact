// Hacer nuevamente la lista de contactos pero ahora con autores consumiendo la api de https://goodreads-devf-aaron.herokuapp.com/docs/
// Usar axios
// Al abrir la pagina debe de cargar todos los autores
// Tener hasta arriba un formulario para crear autores (POST)
// Cuando se cree un nuevo autor SIN RECARGAR se tiene que poder ver el nuevo author (no importa la posición)

import React,{useEffect, useState} from 'react';
import FormAutores from './FormAutores';
import ListaAutores from './ListaAutores';
import axios from 'axios';

function Home() {

    const[autores, setAutores] = useState([]);

    const addAutor = (name,lastName,nationality,bio,gender,age) => {
        console.log('El autor que se agregara es: '+lastName)
        
        // revisar datos objeto con respuesta de api
        const objAutor = {
            id: autores.length+1,
            name: name,
            last_Name: lastName,
            nacionalidad: nationality,
            biography: bio,
            gender: gender,
            age: age,
            is_alive: 'false'
        }

        //get axios objAutor

        setAutores([...autores,objAutor])
    }

    useEffect(() => {
        console.log("Solicitamos la lista de autores");
        axios.get(`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`)
            .then((response)=> {
                console.log(response);
                console.log(response.data);
                //setAutores(response.data)
            })
    },[])

    // sendSearch = (search) => {
    //     // Aqui se hace la llamada al API
    //     axios.get(`https://api.giphy.com/v1/gifs/search?limit=10&q=${search}&api_key=9X4NDdV9B7oVhf8ULMBZhqDoG06uAoZH`)
    //         .then((response)=> {
    //           console.log(response.data.data);
    //           this.setState({results: response.data.data})
    //         })
    //   }

    return(
        <div>
            <h1> Authors Home </h1>
            <FormAutores agregarAutor={addAutor}/>
            {autores.length === 0 ? <h2> Cargando Contactos ...</h2> : <ListaAutores lista={autores}/> }
        </div>
    );
}

export default Home;