import PropTypes from 'prop-types';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li
            onClick={() => onToggleTodo(todo.id)}
            className={`${ (todo.done) ?  'done' : '' }`}
        >
            {todo.description}
            <button
                className="delete-btn"
                onClick={() => onDeleteTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        description: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    }).isRequired
}