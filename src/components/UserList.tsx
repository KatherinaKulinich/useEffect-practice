import { useEffect, useState } from 'react';
import { User } from '../types/User';
import UserListItem from './UserListItem';

interface UserListProps {
    usersData: Array<User>;

}

const UserList: React.FC<UserListProps> = ({ usersData }) => {
    const [selectedUser, setSelectedUser] = useState<User>({} as User);
    
    const messageStyles =
        'uppercase text-center font-light text-slate-500 text-sm';


    const onSelectUserData = (user:User) => {
        setSelectedUser(user)
        console.log(selectedUser)
    };

    if (!usersData) {
        return <p className={messageStyles}>Smth went wrong!</p>;
    }

    if (usersData?.length === 0) {
        return <p className={messageStyles}>No users</p>;
    }




    return (
        <ul className='flex flex-col gap-3 max-w-[400px]'>
            {usersData?.map((user) => (
                <UserListItem
                    user={user}
                    key={user.id}
                    selectUser={() => onSelectUserData(user)}
                />
            ))}
        </ul>
    );
};

export default UserList;
