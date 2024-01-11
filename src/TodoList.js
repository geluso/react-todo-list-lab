import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

function TodoList() {
    let [todos, setTodos] = useState([
        "walk dog",
        "feed cat",
        "buy milk",
    ]);

    const addTodo = (text) => {
        let newTodos = [...todos, text];
        setTodos(newTodos);
    }

    const removeTodo = (indexToRemove) => {
        let newTodos = todos.filter((element, index) => {
            if (index === indexToRemove) {
                // false means "no, this shouldn't be here.
                // this should be filtered out of the list."
                return false;
            }
            // true means "yes this should be in the list."
            return true;
        })
        setTodos(newTodos);
    }

    return <div className="row">
        <div className="col">
            <TodoForm />
            <TodoItems />
        </div>
    </div>
}

export default TodoList;