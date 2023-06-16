import { Input, Columns } from './components';
import { TodoProvider } from './context';

const App = () => {
	return (
		<TodoProvider>
			<div id='main-container' className='container'>
				<h1>Listado de pendientes</h1>
				<Input />
				<Columns />
			</div>
		</TodoProvider>
	);
};

export default App;
