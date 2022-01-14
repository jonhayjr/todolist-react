import { useState } from 'react';

import { Delete } from "@material-ui/icons";

const TodoListItem = ({index, item, toggleCompleted, deleteTodoItem, updateTodoText}) => {
    const [todoValue, setTodoValue] = useState(item.item);

    const DeleteStyling = {
      height: "30px"
    }
    
    const CheckboxStyling = {
       height: "30px"
    }


    const handleCompletedChange = (e) => {
        toggleCompleted(index, !e.target.defaultChecked)
    }
    
    const handleDelete = () => {
        deleteTodoItem(index);
    }

    const handleItemTextChange = (e) => {
        setTodoValue(e.target.value);
        updateTodoText(index, e.target.value);
    }

    return (
        <div className="border border-cyan-500 border-4 p-5 font-sans">
            <input value={todoValue} type="text" className="text-center w-full outline-none focus:border border-cyan-500 cursor-pointer" onChange={(e) => {handleItemTextChange(e)}}/>
            <div className="flex flex-row justify-center">
                <input style={CheckboxStyling} className="cursor-pointer items-center" type="checkbox" checked={item.completed} onChange={(e) => {handleCompletedChange(e)}}/>
                <Delete className="cursor-pointer ml-2 items-center text-cyan-500" onClick={handleDelete} style={DeleteStyling}/>
            </div>
        </div>
    )
}

export default TodoListItem
