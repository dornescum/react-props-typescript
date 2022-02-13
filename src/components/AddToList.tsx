import React, {useState} from 'react';
import {IState as Props} from "../App";

interface IProps {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<{ name: string, age: number, url: string, note?: string | undefined, id: string }[]>>
}


const AddToList: React.FC<IProps> = ({people, setPeople}) => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        url: '',
        note: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({...input, [e.target.name]: e.target.value})
    }
    const handleClick = (): void => {
        if (!input.name || !input.age || !input.url) return;
        setPeople([
            ...people, {
                name: input.name,
                // age: parseInt(input.age),
                age: +input.age,
                url: input.url,
                note: input.note,
                id: Math.random().toString()
            }
        ])
        setInput({
            name: '',
            age: '',
            url: '',
            note: ''
        })
    }

    return (
        <div className='flex items-center justify-center flex-col mt-8'>
            <div className='w-full md:w-3/5 flex flex-col '>
                <input type="text" placeholder='Name' className='py-2 mx-4 md:mx-0 md:pl-2 border mt-4' value={input.name} onChange={handleChange}
                       name='name'/>
                <input type="number" placeholder='Age' className='py-2 mx-4 md:mx-0 md:pl-2 border mt-4' value={input.age} onChange={handleChange}
                       name='age'/>
                <input type="text" placeholder='Image Url' className='py-2 mx-4 md:mx-0 md:pl-2 border mt-4' value={input.url}
                       onChange={handleChange} name='url'/>
                <textarea placeholder='Notes' className='py-2 mx-4 md:mx-0 md:pl-2 border mt-4' value={input.note} onChange={handleChange}
                          name='note'/>
                <button className='py-4 bg-gray-300 text-white mt-8' onClick={handleClick}>Add to list</button>
            </div>


        </div>
    );
};

export default AddToList;
