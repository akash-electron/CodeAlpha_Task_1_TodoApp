import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import TaskList from './TaskList';

const TodoApp = () => {
    const [description , setDescription] = useState('')
    const [title , setTitle] = useState('')
    const [folders, setFolders] = useState([]);

    

    const handleTitle = (e)=>{
        setTitle(e.target.value)
    }
    const handleDescription = (e)=>{
        setDescription(e.target.value)
        // console.log(description)
    }

    const handleAdd = () => {
        // Create a folder object
        const newFolder = { title, description };

        // Update folder list and save it to local storage
        const updatedFolders = [...folders, newFolder];
        setFolders(updatedFolders);
        localStorage.setItem('folders', JSON.stringify(updatedFolders));
        console.log(folders)
        // Clear the input fields
        setTitle('');
        setDescription('');
    };

    return (
        <div className=' border-2 rounded-lg font-bold w-[80%] sm:w-[60%] text-center mx-auto '>
            <h1 className='mt-5 text-3xl sm:text-5xl h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent'> Task Manager</h1>
            <div className='flex flex-col mx-10 gap-3 my-3'>
                <TextField
                    onChange={handleTitle}
                    value={title}
                    label="Task Title"
                    type="text"
                    autoComplete="current-password"
                />
                <div class="relative w-full min-w-[200px]">
                    <textarea
                    value={description}
                    onChange={handleDescription}
                        className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border-2 border-[#C4C4C4] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-lg font-normal text-blue-gray-700 hover:outline outline-1 transition-all placeholder-shown:border placeholder-shown:border-[#C4C4C4] placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#11ADDB] focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "></textarea>
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[20px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#11ADDB] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#11ADDB] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#11ADDB] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Description
                    </label>
                </div>
                <Button onClick={handleAdd} variant='contained' sx={{background:'#6A65F2'}} className='text-center w-[30%]'>Add</Button>
            <TaskList folders = {folders} setFolders={setFolders} />
            </div>

        </div>
    )
}

export default TodoApp