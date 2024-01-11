import TodoItem from "./TodoItem";

function TodoItems({items, removeTodo}) {
    return <div>
        <ul>
            {items.map((item, index) => {
                return <TodoItem key={item} item={item} index={index} removeTodo={removeTodo} />
            })}
        </ul>
    </div>
}

export default TodoItems;