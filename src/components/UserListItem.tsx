
interface UserListItemProps {
    userName: string;
}

const UserListItem: React.FC<UserListItemProps> = ({userName}) => {
    return (
        <li>{userName}</li>
    )
}

export default UserListItem
