import { useState } from 'react';
import './styles.css';

const Input = () => {
	const [textValue, setTextValue] = useState('');

	return (
		<div className='input-group mb-3 input-container'>
			<input
				type='text'
				className='form-control'
				placeholder='Ingrese nueva tarea...'
				onChange={({ target }) => setTextValue(target.value)}
				value={textValue}
				onKeyDown={({key}) => {
					console.log(key);
				}}
			/>
			<button className='btn btn-outline-primary' type='button'>
				Añadir
			</button>
		</div>
	);
};

export default Input;
