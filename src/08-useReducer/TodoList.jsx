import PropTypes from 'prop-types';
import { TodoItem } from './';

export const TodoList = ({ todos = [] }) => {
    return (
        <ul>
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}
