import { useEffect, useState } from 'react';
import './App.css';
import shortid from 'shortid';
import AddHeader from './components/AddHeader/AddHeader';
import AddTable from './components/AddTable/AddTable';
import MyContext from './context/MyContext';
import BackgroundContext from './context/BackgroundContext';
import ButtonBackground from './components/ButtonBackground/ButtonBackground';

function App() {
    const [data, setData] = useState([]);
    const [background, setBackground] = useState(true);
    console.log(background)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(resp => setData(resp))
    }, [setData])

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
        <div className={background ? 'App' : 'App light'}>
            <h2 className='App-title'>REACT TODO APP</h2>
            <div className="todo-app">
                <AddHeader addRow={addRow} />
                <MyContext.Provider value={ data }>
                    <AddTable setData={ setData } deleteRow={ deleteRow }/>
                </MyContext.Provider>
            </div>
            <BackgroundContext.Provider value={setBackground}>
                <ButtonBackground/>
            </BackgroundContext.Provider>
        </div>
    );
}

export default App;