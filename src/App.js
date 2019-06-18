import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todos } from './Todos';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }



render() {
  const tasks = [
    {
      text: "По есть еду"
    },
    {
      text: "Помытб посуду"
    },
    {
      text: "Сделатб уроки"
    },
    {
      text: "Поиглать в манкрафт"
    }
  ]
  return <div>
    <Todos tasks={tasks}></Todos>
    </div>;  
}
}

export default App;
