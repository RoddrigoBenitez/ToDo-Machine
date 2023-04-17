import React from "react";
import './todoStyle.css';



const TodoSearch = () => {
    const onSearchValue = (event) =>{
        console.log(event.target.value);
    }

    return(
        <input className="todoSearch" placeholder='Buscar' onChange={onSearchValue} />
    )
}

export { TodoSearch };