import UserListItem from "./UserListItem";

interface UserListProps {
    usersData: Array<any>;
}

const UserList: React.FC<UserListProps> = ({usersData}) => {

    if (!usersData) {
        return (
            <p>Smth went wrong!</p>
        )
    }


    return (
        usersData.map((user) => (
            <UserListItem userName={user}/> 
        ))
    )
}

export default UserList
