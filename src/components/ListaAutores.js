import React,{useState} from 'react';

function ListaAutores({lista}){
    
    const renderAutores = () => {
        console.log({lista});
        const h3DeAutores = lista.map((autor) => <h3>{autor.last_Name+", "+autor.name}</h3>);
        return h3DeAutores;
    }

    return(
        <div>
            <h2> Lista Autores </h2>
            {renderAutores()}
        </div>
    );
}

export default ListaAutores;