 
 import { ADD_TODO} from "../constants";

 let id=100

const initialState = {
 todos:[{
        id:100,
        task: 'je suis au Maroc',
        prixEnGros: 510,
        prixDetail: 100,
        status:false
    }]
}

export const todoReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case  ADD_TODO:
            return{ todos: [...state.todos, {id: ++id, task: action.task, prixEnGros: action.prixEnGros, prixDetail: action.prixDetail, status:true}]};
       
        default: return state;
    }

} 