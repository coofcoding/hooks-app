import PropTypes from 'prop-types';
import { TodoItem } from './';

export const TodoList = ({ todos = [], onDeleteTodo }) => {
    return (
        <ul>
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={ onDeleteTodo }
                    />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}
