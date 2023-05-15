import React from "react";
import './todoStyle.css';




const TodoSearch = ({ searchValue, setSearchValue }) => {

    const onSearchValue = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input className="todoSearch" placeholder='Buscar' 
        value={searchValue} onChange={onSearchValue} />
    )
}

export { TodoSearch };