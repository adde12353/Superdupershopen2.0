import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const token = localStorage.getItem("token")
    const [isLoggedIN, setIsLoggedIn] = useState(false)

    const [createEmail, setCreateEmail] = useState("")
    const [createUsername, setCreateUsername] = useState("")
    const [createPassword, setCreatePassword] = useState("")
    const [createName, setCreateName] = useState("")
    const [createLastName, setCreateLastName] = useState("")


    

    useEffect(() =>{
        if (token) {
            setIsLoggedIn(true)
        }
    },[token])

    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [success, setSuccess] = useState(false)
    
//skapa användare och spara i local för att ändå simulera ett skapande
    

    useEffect(() =>{
        userRef.current.focus();
    },[])

    useEffect(() =>{
        setErrMsg("");
    }, [user, pwd])

    const handleSubmit = async (e) =>{
        e.preventDefault();
               axios.post("https://k4backend.osuka.dev/auth/login/", {
                    username: user,
                    password: pwd
                  }).then((res) => {
                    if(!res){
                        throw Error
                    }   
                        setUser("")
                        setPwd("")
                        setSuccess(true)
                        localStorage.setItem("token", res.data.token)
                        localStorage.setItem("id", res.data.userId)
                        
                }).catch(Err =>{
                    alert("Wrong password or username")
                })}
                  
     /*    const handleSubmitCreate = (e) => {
            e.preventDefault();
            localStorage.setItem("userData", createUserS)} */
        
        
        const handleCreateUser = () =>{
        
            axios.post('https://k4backend.osuka.dev/users',{
        
                        email:createEmail,
                        username:createUsername,
                        password:createPassword,
                        role: "user",
                        name:{
                            firstname:createName,
                            lastname:createLastName
                        },
                        address:{
                            city:'testgata111',
                            street:'7835 new road',
                            number:3,
                            zipcode:'12926-3874'
                        },
                        phone:'1-570-236-7033'
                    }).then((res)=>res.data)
                    .then(json=>console.log(json))
                    alert("Du har blivit registrerad")
        } 




      // Med Axios
    return ( 
        <>
        {success || isLoggedIN ? (<section>
            <h1>Du är inloggad</h1>
            <p><Link className="links" to="/user-info">Gå till dina uppgifter </Link></p>
            <button type="submit" onClick={() => {setIsLoggedIn(false);
             localStorage.removeItem("token");
        localStorage.removeItem("id")}}>Logga ut</button>
        </section>) : 

       
        (<section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} 
            aria-live="assertive">{errMsg}</p>
            <h1>Logga in</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Användarnamn:</label>
                <input 
                type="text" 
                id="username" 
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                />

                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                id="password" 
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                />
                <button>Sign in</button>
            </form>
        

        </section>)}


        
        <section>
            
        
            <form className="sign-up-form">
            <h2>Skapa ny användare</h2>
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                id="email.create" 
                value={createEmail}
                onChange={(e) => setCreateEmail(e.target.value)}
                required
                />
                <label htmlFor="Användarnamn">Användarnammn:</label>
                 <input 
                type="text" 
                id="username.create" 
                value={createUsername}
                onChange={(e) => setCreateUsername(e.target.value)}
                required
                />
                <label>Password:</label>
                 <input 
                type="password" 
                id="password.create" 
                value={createPassword}
                onChange={(e) => setCreatePassword(e.target.value)}
                required
                />
                <label>Förnamn:</label>
                 <input 
                type="text" 
                id="fornamn.create" 
                value={createName}
                onChange={(e) => setCreateName(e.target.value)}
                required
                />
                <label htmlFor="Användarnamn">Efternamn:</label>
                 <input 
                type="text" 
                id="efternamn.create" 
                value={createLastName}
                onChange={(e) => setCreateLastName(e.target.value)}
                required
                />
                <button type="submit" onClick={handleCreateUser}>Skapa användare</button>
                </form>
        </section>
        </>
     );

}

 
export default Login;