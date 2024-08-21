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

    const [isErrorMessage, setIsErrorMessage] = useState('');

    useEffect(() => {
        if (searchRequest) {
            const controller = new AbortController();
            const signal = controller.signal;

            setIsSuccess(false);
            setLoading(true);
            setIsErrorMessage('');

            axios
                .get(`${API}/search/users?q=${searchRequest}`, { signal })
                .then((result) => {
                    const data = result.data.items;
                    const sortedData = data.map((item: any) => {
                        const { login, id } = item;
                        const user = { login, id };

                        return user;
                    });
                    clearSearchRequest('');
                    setUsers(sortedData);
                    setIsSuccess(true);
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);

                    if (axios.isCancel(error)) {
                        setIsErrorMessage(
                            `Request was canceled, ${error.message}`
                        );
                    } else {
                        setIsErrorMessage('Smth went wrong!');
                    }
                });

            return () => {
                controller.abort();
            };
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
            {isEmptyQueryResult && (
                <p className='text-slate-600 text-center'>
                    No users for this query
                </p>
            )}
            {isErrorMessage && (
                <p className='text-red-500 text-center'>{isErrorMessage}</p>
            )}
        </>
    );
};

export default UsersList;
