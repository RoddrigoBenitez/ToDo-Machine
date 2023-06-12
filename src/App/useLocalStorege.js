import React from "react";

const useLocalStorage = (itemName, initialValue) =>{
  const [state, distpatch] = React.useReducer(reducer, initialState({ initialValue }));
  const { 
    sincronizedItem,
    error,
    loading,
    item,
   } = state;


    // const [sincronizedItem, setSincronizedItem] = React.useState(true);
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(true);
    // const [item, setItem] = React.useState(initialValue);
  
   // ACTION CREATORS == react.useState
   const onError =(error)=> distpatch({ type: actionTypes.error, payload: error });
   const onSuccess =(item)=> distpatch({ type: actionTypes.success, payload: item });
   const onSave =(item)=> distpatch({ type: actionTypes.save, payload: item });
   const onSincronize=()=> distpatch({ type: actionTypes.sincronize });

   
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
        
        onSuccess(parsedItem);
        // setItem(parsedItem);
        // setLoading(false);
      } catch(error){
        onError(error)
        //setError(error);
      }
      }, 2000);
    }, [sincronizedItem]);
  
    const localStorageItem = localStorage.getItem(itemName);
    
  
    const saveItem = (newItem) =>{
      try{
        const stringifiedItem= JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
      // setItem(newItem);
      //setSincronizedItem(true);
      } catch(error){
       onError(error);
      }
    };

    const sincronizeItem = () =>{
      onSincronize();
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeItem,
    };
  }

  const initialState = ({ initialValue })=> ({
     sincronizedItem: true,
     error: false,
     loading: true,
     item: initialValue,
  });

  const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    sincronize: 'SINCRONIZE'
  };

  const reducerObject = (state, payload) =>({
    [actionTypes.error]:{
      ...state,
      error: true,
    },
    [actionTypes.success]:{
      ...state,
      error: false,
      loading: false,
      sincronizedItem: true,
      item: payload,
    },
    [actionTypes.save]: {
      ...state,
      item: payload,
    },
    [actionTypes.sincronize]:{
      ...state,
      loading: true,
      sincronizedItem: false,
    }
  });

  const reducer =  (state, action) =>{
   return( reducerObject(state, action.payload)[action.type] || state);
  };

  export { useLocalStorage }