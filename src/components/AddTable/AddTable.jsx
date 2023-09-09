import { useContext, useState } from 'react';
import './AddTable.css';
import RowIcons from './RowIcons';
import EditorInput from './EditorInput';
import MyContext from '../../context/MyContext';

const Table = ({ setData, deleteRow }) => {
    const contextData = useContext(MyContext);

    const changeBool = (id,currentBool) => {
        setData(contextData.map(row => {
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
        setData(contextData.map(data => {
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
                    contextData.length > 0 
                        ?
                        contextData.map(item => (
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