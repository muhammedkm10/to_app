import {useState,React} from 'react';
import './App.css';
import {Card,Button} from 'react-bootstrap'


function App() {
const [todos,setTodos] = useState([])
const [todo,setTodo] = useState('')
const [name,setName] = useState('')

const [view,setView] = useState(false)
const addTodo = (letter) =>{
  
  setTodo(letter)
  console.log(todo)


}
const addTodoToArray = (todo,name) =>
{
  setTodos([...todos,{id:Date.now(),to_do:todo,status:false,date:Date(),name:name}])
  console.log(todos)
  alert("You'r activity added successfully")
}

const deleteFuction = (id) =>{
  alert("Do you want to delete ?")
  const newList = todos.filter((element)=> (element.id !== id))
      setTodos(newList)
  
}


  return (
    <div className=''>
      <div >
    <h1 className='container-fluid bg-secondary text-white text-center mt-2'>
    write  your plans here...!</h1>
    <div onClick={()=>{setView(!view)}}><h1 className='text-white'>{view?'Got to incompleted works ->':'Got to completed activities ->'}</h1></div>
      </div>
      <div className='row justify-content-center mt-5'>
      <div className=" col-md-4 ">
         <div className='text-center '> 
         <input type="text" className="form-control  m-1" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="your activity name" required/>
          <input type="text" className="form-control m-1" value={todo} onChange={(e)=>addTodo(e.target.value)}  placeholder="🖊️ Add you plan..." required/>
          

          <Button className=' m-1' onClick={()=>addTodoToArray(todo,name)}>Add</Button>
         </div>
        
        </div>
      </div>


      <div className="container" >
      
         {
          
         todos.map((element)=>{
          if (view?element.status:!element.status){
         return(
        
             <div className="d-inline-flex p-3" key={element.id}> {/* Inline style with margin */}
               <Card style={{ width: '18rem' }} className='text-center'>
                  <Card.Img variant="top"style={{ width: '18rem',height:"10rem" }}  src="https://picsum.photos/200/300" />
                    <Card.Body>
                      <Card.Title >Activity Name : {element.name}</Card.Title>
                       <Card.Text>
                            <span className='fs-4'>Plan </span> : {element.to_do}
                        </Card.Text>
                        <p>{element.date}</p>
                      
                        <div className="d-flex justify-content-between align-items-center"> {/* Flexbox for checkbox and button */}
                        {!element.status?
                         <div>
                           <input type="checkbox" className='customCheckbox' 
                           id="customCheckbox" value={element.checked}
                           onChange={(e)=>{

                            setTodos(todos.filter((obj)=>{
                                  if (obj.id === element.id){
                                       obj.status = e.target.checked
                                      }
                                  return obj
                                  }
                                   ))
                                  }
                                   }/>
                           <label for="customCheckbo">You did..?</label>
                           </div> :<h5>You already completed...</h5>} 
                        
                             <Button variant="danger" onClick={()=>deleteFuction(element.id)}>Remove</Button>
                            
                        </div> 
               
              </Card.Body>
          </Card>
         </div>
        
            )
              }
             return null
            
            })
           }
      </div>
    </div>
  )
}

export default App;