import { useRecoilValue  } from "recoil";
import usersState from "../../src/stores/users";


const UserInfo = () => {
    const users = useRecoilValue(usersState)
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("id")

    

    return (  

        <div>
        {users && token && users.filter((data) => data.id == userId).map(data =>(
            <div key={data.id}>
                <h2>Välkommen {`${data.name.firstname} ${data.name.firstname}`}</h2>
                <p>{`Ditt telefonnummer: ${data.phone}`}</p>
                
                <p><u>Din adress:</u> </p>
                <p>{`Stad: ${data.address.city}`}</p>
                <p>{`Gatuadress: ${data.address.street}`}</p>
                <p> {`Nummer: ${data.address.number}`}</p>
                <p>{`Postnummer: ${data.address.zipcode}`}</p>
                </div>
         ))}

        {!token && <h2>Logga in för att få se din information</h2>}</div>
    );
}
 
export default UserInfo;