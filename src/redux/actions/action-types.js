

import { ADD_TODO } from "../constants";

export const addTodo=(task, prixEnGros, prixDetail)=>{
    return{
        type:ADD_TODO,
        task,
        prixEnGros,
        prixDetail
    }

}
