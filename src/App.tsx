
import './App.css';
import FormAddTodo from './Components/From/FormAddTodo';
import RenderTodoList from './Components/TodoList/RenderTodoList';
import { AppTitle,AppDiv1 } from './Components/StyledComponents';
import Provider from './Components/Provider/Datacontext';


//  console.log(DataContext)
function App() {
  
  return (
    <Provider>
    <div className="App" >
      <AppTitle>Todo App in ReactJS</AppTitle>
      <AppDiv1>
       
          <FormAddTodo />
          <RenderTodoList  />
          
      </AppDiv1>
    </div>
    </Provider>
  );
}

export default App;
