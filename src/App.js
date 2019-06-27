import React from 'react';

import './App.css';

import { Todos } from './Todos';



class App extends React.Component {

  constructor(props) {

    super(props);

  }



  render() {

    const tasks = [

      {

        id: 1,

        text: 'Помыть посуду'

      },

      {

        id: 2,

        text: 'Вынести мусор'

      },

      {

        id: 3,

        text: 'Сделать уроки'

      },

      {

        id: 4,

        text: 'Поигратб в майнкрафт'

      }

    ];



    return (

      <div>

        <div className="topbar">

          <h1>Todo</h1>

          <div className="sep"></div>

          <a href="/">Главная</a>

          <a href="#">О программе</a>

        </div>

        <Todos tasks={tasks}></Todos>

        {/* Copyright (c) fourCraft LLC*/}

      </div>

    );

  } 

}



export default App;