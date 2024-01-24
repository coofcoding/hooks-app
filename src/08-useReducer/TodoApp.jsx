import { TodoAdd, TodoList } from "./";
import { useTodo } from '../hooks/';

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

    return (
        <>
            <h1>Todo App</h1>
            <hr />

            <TodoAdd
                onNewTodo={handleNewTodo}
            />

            <div
                className="quantity"
            >
                <span>total: <span className="number">{todosCount}</span></span>
                <span>pendientes: <span className="number">{pendingTodosCount}</span></span>
            </div>
            <TodoList
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onToggleTodo={handleToggleTodo}
            />

        </>
    )
}
