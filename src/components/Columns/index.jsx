import './styles.css'
import Column from './Column';

const Columns = () => {
	return <div className='columns-container'>
        <Column title='Pendiente'/>
        <Column title='En proceso'/>
        <Column title='Terminado'/>
    </div>;
};

export default Columns;
