import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/users/usersSlice";
import { useEffect } from "react";

export default function FetchData() {
const { users, isLoading, error } = useSelector((store) => store.users);
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getUsers());
},[]);

if(isLoading) {
    return (
       <div>Loading...</div>
    )
}
if (error) {
    return (
    <div>Something went wrong!</div>
    )
}

return (
    <div>
        <ul>
            {users.results? users.results.map((user)=> <li key={user.login.uuid}>
             {user.name.first} {user.name.last}
            </li>
            ): <p>No data!</p>}
        </ul>
    </div>
  )
}
