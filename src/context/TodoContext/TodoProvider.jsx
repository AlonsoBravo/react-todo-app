import { useReducer } from 'react';
import PropTypes from 'prop-types';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';
import { actions } from './actions';

const INITIAL_STATE = {
	tasks: [],
};

export const TodoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(todoReducer, {}, () => INITIAL_STATE);

	const onAddTodo = (todo) => {
		dispatch({
			type: actions.addTodo,
			payload: todo,
		});
	};

	const onUpdateTodo = (id, status) => {
		dispatch({
			type: actions.updateTodo,
			payload: {
				id,
				status,
			},
		});
	};

	const onRemoveTodo = (id) => {
		dispatch({
			type: actions.removeTodo,
			payload: id,
		});
	};

	return (
		<TodoContext.Provider
			value={{ ...state, onAddTodo, onUpdateTodo, onRemoveTodo }}
		>
			{children}
		</TodoContext.Provider>
	);
};

TodoProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
