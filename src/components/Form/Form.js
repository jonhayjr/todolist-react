import { useState } from 'react';

const Form = ({addTodoItem}) => {
    const [todoValue, setTodoValue] = useState('');

    const handleInputChange = (e) => {
        setTodoValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //Prevent default form behavior  
        e.preventDefault();

        //Add new item to array
        const newItem = {item: todoValue, completed: false};
    
        addTodoItem(newItem);

        //Reset todoValue   
        setTodoValue('');

    }

    return (
        <form className="text-center mt-5" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" className="
            bg-white border border-cyan-500 border-4 w-1/3 p-2 text-cyan-500 outline:none placeholder:text-cyan-500" placeholder="Add item" value={todoValue} onChange={(e)=> {handleInputChange(e)}}/>
            <button className="ml-4 border border-white border-3 p-3 bg-cyan-500 text-white font-bold hover:bg-white hover:text-cyan-500 hover:border-cyan-500 hover:border-3">Add Item</button>
        </form>
    )
}

export default Form
