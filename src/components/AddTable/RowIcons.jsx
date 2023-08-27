import React from 'react';

const RowIcons = ({item, changeBool, deleteRow}) => {
    return (
        <div className='descr-item__icons'>
            <button className='descr-item__edit' 
                onClick={ () => changeBool(item.id, item.bool)}
                src={ item.edit }>EDIT</button>
            <button className='descr-item__remove'
                onClick={() => deleteRow(item.id)} 
                src={item.delete}>DEL</button>
        </div>
    );
};

export default RowIcons;