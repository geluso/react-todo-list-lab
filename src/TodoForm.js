function TodoForm({addTodo}) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
        let text = ev.target.elements.todo.value;
        addTodo(text);
    }

    return <div>
        <form>
            <input name="todo" />
            <button>Add TODO</button>
        </form>
    </div>
}

export default TodoForm;