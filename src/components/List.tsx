import React from 'react';
import {IState as IProps} from "../App"

// interface IProps {
//     people:{
//         name:string,
//         age: number,
//         url: string,
//         note?:string,
//         id: string
//     }[]
// }


// const List = (props: IProps) => {
const List: React.FC<IProps> = ({people}) => {

const renderList =():JSX.Element[]=>{
    return people.map((person)=>{
        return <li className='flex flex-col lg:flex-row w-full mx-1 md:mx-0 py-2 mb-2 bg-stone-100' key={person.id}>
            <div className='flex flex-col md:flex-row items-center justify-center mx-4'>
                <img src={person.url} alt={person.name} className="h-32 w-32 object-cover rounded-full md:mx-4"/>
                <h2 className='text-2xl mx-4 font-bold py-4 md:py-0'>{person.name}</h2>
            </div>
             <p className='flex items-center justify-center mr-8 py-4 md:py-0'>{person.age} years old </p>
            <p className='flex items-center justify-center capitalize underline py-4 md:py-0'>{person.note}</p>
        </li>
    })
}

    return (
        <ul className='flex flex-col mx-auto  py-8 w-full  md:w-3/5 '>
            {renderList()}
        </ul>
    );
};

export default List;
