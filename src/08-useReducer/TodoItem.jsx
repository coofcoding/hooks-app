import PropTypes from 'prop-types';

export const TodoItem = ({ todo }) => {
    return (
        <li>
            {todo.description}
            <button
                className="delete-btn"
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