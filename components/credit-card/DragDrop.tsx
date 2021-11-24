import React, { Component } from 'react';

export default class DragDrop extends Component {      
  state = {            
    tasks: [{
      name:"Borrow",             
      category:"wordbank",
      bgcolor: "yellow"
    },
    {
      name:"Spend",
      category:"wordbank",
      bgcolor:"pink"
    },
    {
      name:"Plastic",
      category:"fillblank",              
      bgcolor:"skyblue"
    }]
  }

  onDragStart = (ev, id) => {
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  }

  render () {

    /** 
     * wordbank[] contains all tasks in the wordbank category (left)
     * fillblank[] contains all the fillblank tasks (right)
     */
    var tasks = {
      wordbank: [],
      fillblank: [],
    }
    
    /** 
     * looping through all the tasks and creating a div for every task
     *  item and storing it in the respective categories
     * */

    this.state.tasks.forEach ((task) => {
      tasks[task.category].push(
        <div 
          key={task.name}
          onDragStart={(e)=> this.onDragStart(e, task.name)}
          draggable
          className="absolute w-24 h-24 m-2 leading-10"
          style={{backgroundColor: task.bgcolor}}
        >
          {task.name}
        </div>
      );
    });

    
    return (
      <div className="flex flex-row">
        <div 
          className="w-36 h-full"
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={(e)=>{this.onDrop(e,"wordbank")}}>
          <span className="inline-block w-full bg-blue-200">Word Bank</span>
          {tasks.wordbank}
        </div>
        <div
          className="w-36 h-36"
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={(e)=>this.onDrop(e, "fillblank")}>
          <span className="inline-block w-full bg-blue-200">Fill in Blank</span>
          {tasks.fillblank}
        </div>


      </div>
    );  
  }
}
