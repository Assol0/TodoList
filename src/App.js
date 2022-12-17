import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./redux/action/action";
import './css/app.css'


function App() {


  const [counter, setCounter] = useState(0)
  const [todo, setTodo] = useState('')
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const todoSubmitHandler = () => {
    if(todo !== ""){
      dispatch(addTodo(counter, todo))
      setCounter(counter +1)
      setTodo("")
    }
  }

  return (
    <div className="App">
      <div className="container">
        
          <h2 className="todo">todo</h2>
            <input className="input" type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
            <button className="btn" onClick={todoSubmitHandler}>Добавить</button>
          <div className="list">
            <ul>{
                todos?.map((todo) => (
                <li className="todolist" key={todo.id}>
                {todo.task}
                <button className="btn2" onClick={() => dispatch(removeTodo(todo.id))}>Выполнено</button>
                </li>
                  ))
                }
            </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
