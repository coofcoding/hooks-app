import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoAdd, TodoList } from "./";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del tiempo',
        done: false
    }
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    return (
        <>
            <h1>Todo App</h1>
            <hr />

            <TodoAdd
                onNewTodo={handleNewTodo}
            />
            <TodoList
                todos={todos}
            />

        </>
    )
}
