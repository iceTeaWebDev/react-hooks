import React, { useState, useReducer } from 'react';
import { useContext } from 'react';
import { Context } from '../store/Provider';

export default () => {
    const [state, dispatch] = useContext(Context);
    console.log(state)
    return (
        <>
            <input onChange={(e) => dispatch({type: "CHANGE_INPUT", input: e.target.value})} value={state.productInput}/>
            <button onClick={() => dispatch({type: "ADD", data: state.productInput})}>ADD</button>
            {state.products.map((item, index) => (<div key={index}>{item}<button onClick={() => dispatch({type: "DELETE", data: index})}>DELETE</button></div>))}
        </>
    );
}