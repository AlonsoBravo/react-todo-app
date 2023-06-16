import { actions } from './actions';

const INITIO_STATE = {
	tasks: [],
};

export const todoReducer = (state = INITIO_STATE, { type, payload }) => {
	const onHandleTodo = {
		[actions.addTodo]: () => ({
			...state,
			tasks: [...state.tasks, { ...payload }],
		}),
		[actions.updateTodo]: () => {
			const { id, status } = payload;

			const tasks = [...state.tasks].map((task) => {
				if (task.id === id) {
					task.status = status;
				}

				return task;
			});

			return { ...state, tasks };
		},
		[actions.removeTodo]: () => {
			const tasks = [...state.tasks].filter(({ id }) => id !== payload);

			return { ...state, tasks };
		},
	};

	if (Object.prototype.hasOwnProperty.call(onHandleTodo, type)) {
		return onHandleTodo[type]();
	}

	return state;
};
