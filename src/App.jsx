import { useEffect, useState } from 'react';
import './App.css';
import shortid from 'shortid';
import AddHeader from './components/AddHeader/AddHeader';
import AddTable from './components/AddTable/AddTable';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(resp => setData(resp))
    }, [setData])

    console.log(data)
    const addRow = (text) => {
        if(text) {
            const newRow = { id: shortid.generate(), title: text, edit: 'img/icons8-edit-30.png', delete: 'img/icons8-close-30.png', bool: false};
            setData([...data, newRow]);
        }
    };

    const deleteRow = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
    };

    return (
        <div className="App">
            <h2 className='App-title'>REACT TODO APP</h2>

            <div className="todo-app">
                <AddHeader addRow={addRow} />
                <AddTable data={data} setData={ setData } deleteRow={ deleteRow }/>
            </div>
        </div>
    );
}

export default App;