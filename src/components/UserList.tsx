import { User } from '../types/User';
import UserListItem from './UserListItem';

interface UserListProps {
    usersData: Array<User>;
    onSelectUserData: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ usersData, onSelectUserData }) => {
    const messageStyles =
        'uppercase text-center font-light text-slate-500 text-sm';

    return (
        <>
            {usersData ? (
                <ul className='flex flex-col gap-3 max-w-[400px]'>
                    {usersData?.length > 0 ? (
                        usersData?.map((user) => (
                            <UserListItem
                                user={user}
                                key={user.id}
                                selectUser={onSelectUserData}
                            />
                        ))
                    ) : (
                        <p className={messageStyles}>No users</p>
                    )}
                </ul>
            ) : (
                <p className={messageStyles}>Smth went wrong!</p>
            )}
        </>
    );
};

export default UserList;
