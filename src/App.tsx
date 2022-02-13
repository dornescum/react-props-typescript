import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
    people:{
        name:string,
        age: number,
        url: string,
        note?:string,
        id:string
    }[]
}

function App() {
const [people, setPeople] = useState<IState["people"]>([
    {
        name:"Michael Jackson",
        age: 23,
        url: 'https://images.unsplash.com/photo-1643113231904-ea2af9b4ebcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pY2hhZWwlMjBqYWNrc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        note: 'singer',
        id: 'j1'
    }
])
    return (
        <div >
            <h1 className="text-3xl font-bold underline text-clifford mb-12 text-center"> Add people </h1>

            <div className="flex flex-col">
                <List people={people}/>
                <AddToList people={people} setPeople={setPeople}/>
            </div>

        </div>
    );
}

export default App;
