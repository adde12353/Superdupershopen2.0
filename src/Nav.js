import { Link } from "react-router-dom"


 
const NavBar = () => {

    return ( 
    <header className="header">
       <div className="logo"> <Link className="links" to="/"><h1>SuperShoppen</h1></Link></div>
       <nav className="navbar">
    <Link className="links" to="/produkter">Produkter</Link>
    <Link className="links" to="/varukorg">Varukorg</Link>
    <Link className="links" to="/user-info">Profile</Link>
    <Link className="links" to="/admin">Admin</Link>
    {<Link className="links" to="/login">Login/Logout</Link>}
    
    
    
   
    </nav>
    </header>
    )}

 
export default NavBar