import {Component} from 'react';
import check from './3.png';

export class ToDoList extends Component{
    state={
        userInput:'',
        toDoList:[]
    }

    onChangeEvent(e){
        this.setState({userInput:e})
    }

    addItem(input){
        if (input===''){
            alert('Пожалуйста, напишите, что Вам необходимо сделать')
        }
        else{
        let listArray=this.state.toDoList;
        listArray.push(input);
        this.setState({toDoList: listArray, userInput: ''})
        }
    }

    deleteItem(){
        let listArray=this.state.toDoList;
        listArray=[];
        this.setState({toDoList:listArray})
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    crossedWord(event){
        const li=event.target;
        li.classList.toggle('crossed');
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input placeholder='Что планируешь сделать сегодня?' type='text' 
                       onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                       value={this.state.userInput}/>
            </div>
            <div className='container'>
                <button onClick={()=>this.addItem(this.state.userInput)}>Добавить</button>
            </div>
            <ul>
                {this.state.toDoList.map((item,index)=>(
                    <li onClick={this.crossedWord} key={index}><img className='check' src={check} width='20px' alt='check'/>{item}</li>
                ))}
            </ul>
            <div className='container'>
                <button onClick={()=>this.deleteItem()}>Удалить</button>
            </div>
            </form>
        )
    }
}