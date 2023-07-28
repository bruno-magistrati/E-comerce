import React from "react";
import { useState } from "react";

const ItemCount = ({stockItems}) => {

    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } 
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
        
    }

    return(
        <div id="itemcount">
            <div className="row mb-3">
                <div className="col-md-2">
                    <div>
                        <button onClick={decrementarStock} >-</button>
                        <button>{counter} </button>
                        <button onClick={incrementarStock} >+</button>
                     </div>
                </div>
            </div>
         <div className="row">
         <div className="col-md-2">
            <button>Agregar al carrito</button>    
                
                </div>
            </div>
        </div>  
    )
}

export default ItemCount;