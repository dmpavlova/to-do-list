import './App.css';
import image from './1.jpg';
import imageTwo from './2.jpg';
import { ToDoList } from './ToDoList';

function App() {
  return(
  <div className='app'>
    <div className='container'>
    <img src={image} width='150px' alt='to-do-list'/>
    </div>
    <h1 className='container'>Список дел</h1>
    <ToDoList/>
    <div className='container'>
    <img src={imageTwo} width='300px' alt='to-do-list'/>
    </div>
  </div>
)}

export default App;
