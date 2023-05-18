import React, { Component } from "react";

function withStoragelistener(WrapperComponent){
    return function WrapperComponentWithStorList(props){
        const [storageChange, setStorageChange] = React.useState(false);
        
        window.addEventListener('storage', (change) =>{
            if (change.key === 'TODOS_V1'){
                console.log('hubo cambios aca');
                setStorageChange(true)
            } 
        });


        const toggleShow =()=>{
            props.sincronize();
            setStorageChange(false);
        }
        
        return (
            <WrapperComponent 
                show={storageChange} 
                toggleShow={setStorageChange} 
            />
        )
    }
}

export { withStoragelistener };