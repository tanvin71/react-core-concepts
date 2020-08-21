import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friends=['Rabbi','Rahim','Rasel',];
  const products=[
    {name:'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price:'$6.99'},
    {name: 'Premiere El', price:'$249.99'}
  ]

  return (
    <div className="App">
      <header className="App-header">
       <p>I am a React person</p>
       <Counter></Counter>
       <Users></Users>
       <ul>
         {
           friends.map(friend=> <li>{friend}</li>)
         }
         {
           products.map(product => <li>{product.name}</li>)
         }
       </ul>
       {
           products.map(pd => <Product product = {pd}></Product>)
          
         }
       
       
      </header>
    </div>
  );
}
  
function Product(props){
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '5px 0'
  }
  const {name,price} = props.product;
  console.log(name, price);
  return(
    <div style={productStyle}>
      <h3>{name} </h3>
      <h4>{price} </h4>
      <button>Buy now</button>
    </div>
  )
}
function Users (){
  const [users,setUsers] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  
  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Person(props){
  return (
    <div style={{border:'2px solid maroon',width:'400px', margin:'40px 0'}}>
      <h3>My Friend's Name: {props.name} </h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}
function Counter (){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove = {() => setCount(count - 1)}>Decrease</button>
      <button onMouseMove = {() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default App;
