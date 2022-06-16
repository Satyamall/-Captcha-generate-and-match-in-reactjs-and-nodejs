import axios from "axios";
import { useState } from "react"

export function cart ({}){
   
    const [price , setPrice]= useState(null);
    const [quantity, setQuantity] = useState(null);
    const obj = [{
        id: 1,
        price: 500,
        quantity: 10,
    },
    {
        id: 2,
        price: 600,
        quantity: 5
    }
]

const hadleUpdate = (id)=>{
    axios.post(url+id,{
        price: price,
        quantity,quantity
    })
}

const handleDelete = (id)=>{
    axios.delete(url+id);
}

    return <div>
         
    </div>
}