import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../types/User';
import UserListItem from './UserListItem';

interface UsersListProps {
    searchRequest: string;
    selectedUser: User | null;
    onSelectUserData: (user: User | null) => void;
    clearSearchRequest: (newValue: string) => void;
}

const UsersList: React.FC<UsersListProps> = ({
    searchRequest,
    onSelectUserData,
    selectedUser,
    clearSearchRequest
}) => {
    const API = import.meta.env.VITE_API_URL;

    const [users, setUsers] = useState<Array<User>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isEmptyQueryResult, setIsEmptyQueryResult] =
        useState<boolean>(false);

    useEffect(() => {
        if (searchRequest) {
            setIsSuccess(false);
            setLoading(true);
            axios
                .get(`${API}/search/users?q=${searchRequest}`)
                .then((result) => {
                    const data = result.data.items;
                    const sortedData = data.map((item: any) => {
                        const { login, id } = item;
                        const user = { login, id };

                        return user;
                    });
                    clearSearchRequest('');
                    setUsers(sortedData);
                    setLoading(false);
                    setIsSuccess(true);
                });
        }
    }, [searchRequest]);

    useEffect(() => {
        if (users?.length === 0 && !loading && isSuccess) {
            setIsEmptyQueryResult(true);
            return;
        }
        setIsEmptyQueryResult(false);
    }, [users]);

    useEffect(() => {
        if (isEmptyQueryResult) {
            onSelectUserData(null);
        }
    }, [isEmptyQueryResult]);

    if (loading) {
        return (
            <p className='flex justify-center text-md uppercase text-slate-500'>
                Loading..
            </p>
        );
    }

    return (
        <>
            {users?.length > 0 && !loading && (
                <ul className='flex flex-col gap-3 max-w-[400px]'>
                    {users?.map((user: User) => (
                        <UserListItem
                            user={user}
                            key={user.id}
                            selectUser={() => onSelectUserData(user)}
                            additionalStyles={
                                selectedUser === user
                                    ? 'bg-sky-200'
                                    : 'bg-sky-50'
                            }
                        />
                    ))}
                </ul>
            )}
            {isEmptyQueryResult && <p>No users for this query</p>}
        </>
    );
};

export default UsersList;
