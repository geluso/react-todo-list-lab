import { useState } from "react";
import './TodoItem.css';

function TodoItem({item, index, removeTodo}) {
    let [isComplete, setIsComplete] = useState(false);

    const toggleIsComplete = () => {
        setIsComplete(!isComplete);
    }

    return <li className="todo-item">
        {isComplete && <s>{item}</s>}
        {!isComplete && item}
        {' '}
        <i className="bi bi-x-circle"></i>
    </li>
}

export default TodoItem;