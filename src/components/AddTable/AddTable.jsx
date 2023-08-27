import { useState } from 'react';
import './AddTable.css';
import RowIcons from './RowIcons';
import EditorInput from './EditorInput';

const Table = ({ data, setData, deleteRow }) => {
    const changeBool = (id,currentBool) => {
        setData(data.map(row => {
            if(id === row.id) {
                return {
                    ...row,
                    bool: !currentBool
                }
            }
            return row;
        }));
    }

    const editRow = (id, text) => {
        setData(data.map(data => {
            if(id === data.id && text) {
                return {
                    ...data,
                    title: text
                }
            }
            return data;
        }))
    }


    const [text, setText] = useState('');


    return (
        <table className='main-table'>
            <tbody className='table-desc'>
                {
                    data.length > 0 
                        ?
                        data.map(item => (
                            <tr className='descr-items' key={item.id}>
                                <td className='descr-item descr-item__id'>{item.id}</td>
                                <td className='descr-item descr-item__text'>{item.title}</td>
                                <td className='descr-item'>
                                    {
                                        !item.bool
                                            ? 
                                            <RowIcons 
                                                item={item} 
                                                changeBool={changeBool}
                                                deleteRow={deleteRow}
                                                />
                                            :
                                            <EditorInput
                                                item={ item } 
                                                setText={ setText } 
                                                changeBool={ changeBool }
                                                editRow={ editRow }
                                                text={text}
                                                />
                                    }
                                </td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td className='empty'>No task found...</td>
                        </tr>
                }
            </tbody>
        </table>
    );
};

export default Table;