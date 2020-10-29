import React,{useState} from 'react';

function FormAutores({agregarAutor}) {
    const[name,setName] = useState('');
    const[lastName,setLastName] = useState('');
    const[nationality,setNationality] = useState('');
    const[bio,setBio] = useState('');
    const[gender,setGender] = useState('');
    const[age,setAge] = useState('');

    const onSubmitAutor = (e) => {
        e.preventDefault();
        console.log('Click on Submit');
        agregarAutor(name,lastName,nationality,bio,gender,age)
    }

    return(
        <div>
            <h2> Authors Form </h2>
            <form onSubmit ={onSubmitAutor}>
                <input 
                    value={name}
                    onChange={(e) =>{
                        setName(e.target.value)
                    }}
                    required
                    placeholder="Nombre"
                />
                <input 
                    value={lastName}
                    onChange={(e) =>{
                        setLastName(e.target.value)
                    }}
                    required
                    placeholder="Apellidos"
                />
                <input 
                    value={nationality}
                    onChange={(e) =>{
                        setNationality(e.target.value)
                    }}
                    required
                    placeholder="Nacionalidad(MX,US...)"
                />
                <input 
                    value={bio}
                    onChange={(e) =>{
                        setBio(e.target.value)
                    }}
                    required
                    placeholder="Biografia"
                />
                <input 
                    value={gender}
                    onChange={(e) =>{
                        setGender(e.target.value)
                    }}
                    required
                    placeholder="Genero(M o F)"
                />
                <input 
                    value={age}
                    type="number"
                    onChange={(e) =>{
                        setAge(e.target.value)
                    }}
                    required
                    placeholder="Edad"
                />
                <button type="submit"> Guardar </button>
            </form>
        </div>
    );
}

export default FormAutores;