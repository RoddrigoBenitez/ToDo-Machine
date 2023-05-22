import React from "react";


function useStoragelistener(sincronize){
        
        const [storageChange, setStorageChange] = React.useState(false);
        
        window.addEventListener('storage', (change) =>{
            if (change.key === 'TODOS_V1'){
                console.log('hubo cambios aca');
                setStorageChange(true)
            } 
        });


        const toggleShow =()=>{
            sincronize();
            setStorageChange(false);
        }
        
        return {
            show: storageChange,
            toggleShow,
        } 
    }


export { useStoragelistener };