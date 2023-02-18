import {useQuery} from "react-query";
import API from "../api";


export function Dashboard() {
    const usersQuery = useQuery('users', API.getUsers)

    if (usersQuery.isLoading) {
        return "Loading..."
    }

    return (
        <div>
            Dashboard
            {(usersQuery.data as any).name}
        </div>
    )
}
