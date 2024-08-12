import UserListItem from './UserListItem';

interface UserListProps {
    usersData: Array<any>;
}

const UserList: React.FC<UserListProps> = ({ usersData }) => {
    if (!usersData) {
        return <p>Smth went wrong!</p>;
    }

    // return usersData.map((user) => <UserListItem userName={user} />);
    return (
        <ul className='flex flex-col gap-3 max-w-[400px]'>
            <UserListItem userName={'name'} />
            <UserListItem userName={'name'} />
            <UserListItem userName={'name'} />
        </ul>
    );
};

export default UserList;
