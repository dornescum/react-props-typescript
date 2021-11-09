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
        name:"Mj",
        age: 23,
        url: 'https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        note: 'just a notification',
        id: 'j1'
    }
])

    return (
        <div className="App">
            <h1>List of people</h1>
            <List people={people}/>
            <AddToList people={people} setPeople={setPeople}/>
        </div>
    );
}

export default App;
