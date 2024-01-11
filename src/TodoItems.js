import TodoItem from "./TodoItem";

function TodoItems({items, removeTodo}) {
    return <div>
        <ul>
            {items.map((item, index) => {
                return <TodoItem />
            })}
        </ul>
    </div>
}

export default TodoItems;