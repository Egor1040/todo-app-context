import React, { useState } from 'react';
import './AddHeader.css';

const AddHeader = ({ addRow }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="add-header">
            <input
                className="app-header__enter"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Create a new todo'
            />
            <button className="app-header__add" 
                onClick={() => {
                    addRow(inputValue)
                    setInputValue('');
            }}>
                Add
            </button>
        </div>
    );
};

export default AddHeader;