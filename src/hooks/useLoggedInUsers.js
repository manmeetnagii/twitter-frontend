import { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";

const useLoggedInUser = () => {
    const { user } = useUserAuth();
    const email = user?.email;
    const  phoneNumber = user?.phoneNumber;
    const [loggedInUser, setLoggedInUser] = useState({});

    useEffect(() => {
        if(!phoneNumber){
            fetch(`http://localhost:8000/loggedInUser?email=${email}`)
            .then(res => res.json()) 
            .then(data => {
               
                setLoggedInUser(data)
            })
        }
        else{
            fetch(`http://localhost:8000/loggedInUser?phoneNumber=${phoneNumber.replace("+", "")}`)
            .then(res => res.json()) 
            .then(data => {
                setLoggedInUser(data)
            })
        }
    }, [email])

    return [loggedInUser, setLoggedInUser];
}

export default useLoggedInUser