import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el Todo Pendiente de completar', () => {

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).not.toBe('done');

        const buttonElement = screen.getByRole('button');
        expect(buttonElement.className).toBe('delete-btn')
    });
    
    test('debe de mostrar el Todo Completado', () => {

        todo.done = true;
        
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );
        
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('done');
    });
    
    test('li debe de llamar el ToggleTodo cuando se hace click', () => {
        
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );
        
        const liElement = screen.getByRole('listitem');
        fireEvent.click( liElement );
        
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
        
    });
    
    test('el boton debe de llamar el deleteTodo cuando se hace click', () => {
        
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );
        
        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );
        
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

    });
});