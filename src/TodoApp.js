
import React, { useRef}from 'react'
import { useSelector,  useDispatch} from 'react-redux'
import { addTodo } from './redux/actions/action-types'
import './App.css'


const TodoApp = () => {
    const todo=useRef()
    const prixE=useRef()
    const prixD=useRef()
    const dispatch = useDispatch()
    const ListAdd=useSelector(state=>state.todos)

    return (
        <div>
           task <input type="text" ref={todo}></input>
           prix en gros <input  type="text" ref={prixE}></input>
           prix en detail <input  type="text" ref={prixD}></input>
            <button onClick={ () => dispatch (addTodo(todo.current.value, prixD.current.value)) }>Ajouter en gros</button>
            <button onClick={ () => dispatch (addTodo(todo.current.value, prixE.current.value)) }>Ajouter detail</button>

            
          
            {ListAdd.map((todos) =>(
             <div className="diva"> 
            <h1>{todos.id}</h1>,
            <h1>{todos.task}</h1>,
            <h1>{todos.prixEnGros}</h1>,
            <h1>{todos.prixDetail}</h1>
            
            </div>))}
          

        </div>
    )
}

export default TodoApp


