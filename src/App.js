import React from 'react';

import './App.css';

import { Todos } from './Todos';

import { ModalContainer, ModalDialog } from 'react-modal-dialog';

import { About } from './About';



class App extends React.Component {

  constructor(props) {

    super(props);



    this.state = {

      isShowingModal: false

    }

  }



  handleClick() {

    this.setState({

      isShowingModal: true

    });

  } 



  handleClose() {

    this.setState({

      isShowingModal: false

    });

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

          <h1>Simple Todo List</h1>

          <div className="sep"></div>

          <a href="/">Home</a>

          <a onClick={this.handleClick.bind(this)}>About APP</a>

        </div>

        <Todos tasks={tasks}></Todos>

        <div className="footer">

          Copyright © {(new Date()).getFullYear()} fourCraft LLC

        </div>

        {

          this.state.isShowingModal &&

          <ModalContainer onClose={this.handleClose.bind(this)}>

          <ModalDialog onClose={this.handleClose.bind(this)}>

            <About></About>

          </ModalDialog>

        </ModalContainer>

        }

      </div>

    );

  } 

}



export default App;