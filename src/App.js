import './App.css';
import NavBar from './Nav';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Produkt from './Produkt';
import Produkter from './Produkter';
import useFetch from './components/Produktinfo/useFetchproduct.js';
import { useState } from 'react';
import Varukorg from './Varukorg';
import AdminPage from './pages/AdminPage';
import Login from './pages/Login';
import UserInfo from './pages/UserInfo';
import useFetchUsers from './components/useFetchPeople';

function App() {

  const {Data:produkter} = useFetch("https://k4backend.osuka.dev/products/")
  const {Data:userList} = useFetchUsers("https://k4backend.osuka.dev/users/")

  const [varukorg, setVarukorg] = useState([]);

  const handleAdd = (produkt) =>{
      const ProduktEx = varukorg.find((item) => item.id === produkt.id);
      if(ProduktEx) {
        setVarukorg(varukorg.map((item) => item.id === produkt.id ?
        {...ProduktEx, quantity: ProduktEx.quantity +1 }: item)
        );
      }
        else{ 
          setVarukorg([...varukorg, {...produkt, quantity:1 }])
  
        }
      };

      const handleRemove = (produkt) =>{
        const ProduktEx = varukorg.find((item) => item.id === produkt.id);
          if(ProduktEx.quantity === 1) 
          {setVarukorg(varukorg.filter((item) => item.id !== produkt.id))} 
          else {setVarukorg(
            varukorg.map((item => item.id === produkt.id ? {...ProduktEx, quantity: ProduktEx.quantity -1} 
            : item
          ))
            )
        }
          };
      
      
      
      
      
  
    
  

  return (

    
    <Router>
    <div className="App">

      
      <NavBar/>
         <Switch>
           <Route exact path="/">
             <Home/>
           </Route>
           <Route exact path="/produkter">
             <Produkter produkter={produkter} varukorg={varukorg} handleAdd={handleAdd} />
           </Route>
           <Route exact path="/varukorg">
            <Varukorg produkter={produkter} varukorg={varukorg} handleAdd={handleAdd} handleRemove={handleRemove}/>
             </Route>
             <Route path="/produkt/:id">
               <Produkt produkter={produkter} varukorg={varukorg} handleAdd={handleAdd} handleRemove={handleRemove}/>
             </Route>
             <Route path="/admin">
               <AdminPage produkter={produkter} userList={userList && userList}/>
             </Route>
             <Route path="/login">
               <Login/>
             </Route>
             <Route path="/user-info">
               <UserInfo/>
             </Route>
             
             
             

         </Switch>

        
      
      
    </div>
    </Router>
  );
}

export default App;
