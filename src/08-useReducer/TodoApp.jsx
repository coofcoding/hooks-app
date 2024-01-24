import { TodoAdd, TodoList } from "./";
import { useTodo } from '../hooks/';

export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

    return (
        <>
            <h1>Todo App</h1>
            <hr />

            <TodoAdd
                onNewTodo={handleNewTodo}
            />
            <TodoList
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onToggleTodo={ handleToggleTodo }
            />

        </>
    )
}
