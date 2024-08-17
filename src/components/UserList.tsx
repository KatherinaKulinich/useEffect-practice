import { User } from '../types/User';
import UserListItem from './UserListItem';

interface UserListProps {
    usersData: Array<User>;
}

const UserList: React.FC<UserListProps> = ({ usersData }) => {
    if (!usersData) {
        return <p>Smth went wrong!</p>;
    }

    // return usersData.map((user) => <UserListItem userName={user} />);
    return (
        <ul className='flex flex-col gap-3 max-w-[400px]'>
            {usersData?.map((user) => (
                <UserListItem
                    userName={user.login}
                    key={user.id}
                />
            ))}
        </ul>
    );
};

export default UserList;
