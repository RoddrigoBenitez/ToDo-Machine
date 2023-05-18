import React from "react";

const useLocalStorage = (itemName, initialValue) =>{
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
   
    React.useEffect(() => {
      setTimeout(() => {
      try {
        let parsedItem;
  
  
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }
      
        setItem(parsedItem);
        setLoading(false);
      } catch(error){
        setError(error);
      }
      }, 2000);
    }, [sincronizedItem]);
  
  
  
    const localStorageItem = localStorage.getItem(itemName);
    
  
  
    const saveItem = (newItem) =>{
      try{
        const stringifiedItem= JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
      setSincronizedItem(true);
      } catch(error){
        setError(error);
      }
    };

    const sincronizeItem = () =>{
      setLoading(true);
      setSincronizedItem(false);
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeItem,
    };
  }

  export { useLocalStorage }