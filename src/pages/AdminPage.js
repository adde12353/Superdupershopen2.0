import { useRecoilValue  } from "recoil";
import productsState from "../../src/stores/products";
import usersState from "../../src/stores/users";

import { useEffect, useState } from "react"
const AdminPage = () => {
    const produkter = useRecoilValue(productsState)
    const users = useRecoilValue(usersState)

    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("id")


    const [isAdmin, setIsAdmin] =useState(false)

  
   
   useEffect(() => {
    users && token && users.forEach(data => {
        if(data.role === "admin"){
            const id = data.id
            if ( id == userId){ //Need to be a number
             setIsAdmin(true)
            }
        }
     });
   })
    
        
        


    return (
        <>
        {!isAdmin && <h2>Du har inte tillgång till adminsidan</h2>}

        {isAdmin && users && <h2>Alla användare</h2>}
        
        <div className="användare-lista">
        
        {isAdmin && users && users.map((user) => (
            <div key={user.id} className="användare">
                <h2>{user.name.firstname +" "+ user.name.lastname}</h2>
                <p>{user.username}</p>
                <p>{user.password}</p>
                <p>{user.email}</p>
            </div>
        ))}
        </div>

        <div className="produkt-lista">
            
            {isAdmin && produkter && produkter.map((data) => (

                <div className="product-cards" key={data.id}>
                    <img src={data.image} alt={data.title}/>
                  
                    <h2>{data.title}</h2>
                    
                </div>
            ))}

        </div>
        </> 
     );
}
 
export default AdminPage;