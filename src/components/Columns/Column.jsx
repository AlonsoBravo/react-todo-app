import PropTypes from 'prop-types';

const Column = ({ title }) => {
	return (
		<div className='col column-container'>
			<h4>{title}</h4>
			<div className='column-content-container'></div>
		</div>
	);
};

Column.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Column;
