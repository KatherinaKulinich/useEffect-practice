// import './App.css'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Button from './components/Button';
import Icon from './components/Icon';
import SearchBar from './components/SearchBar';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import { User, UserDetailedData } from './types/User';

const App: React.FC = ({}) => {
    const [users, setUsers] = useState<Array<User>>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [userDetailedData, setUserDetailedData] =
        useState<UserDetailedData | null>(null);

    const [tempValue, setTempValue] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const api = 'https://api.github.com';

    useEffect(() => {
        if (searchValue) {
            axios.get(`${api}/search/users?q=${searchValue}`).then((result) => {
                const data = result.data.items;
                const sortedData = data.map((item: any) => {
                    const { login, id } = item;
                    const user = { login, id };
                    return user;
                });
                setUsers(sortedData);
            });
        }
    }, [searchValue]);

    useEffect(() => {
        // console.log(selectedUser)
        if (selectedUser !== null) {
            console.log('!!!');
            const query = selectedUser.login;

            axios.get(`${api}/users/${query}`).then((result) => {
                const data = result.data;

                const {
                    id,
                    login,
                    followers,
                    following,
                    avatar_url,
                    created_at
                } = data;

                const user = {
                    id,
                    login,
                    followers,
                    following,
                    avatar_url,
                    created_at
                };

                setUserDetailedData(user);
            });
        }
    }, [selectedUser]);

    const onChangeInputValue: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.currentTarget.value;
        setTempValue(value);
    };

    const onSubmitData: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setSearchValue(tempValue);
    };

    const onSelectUserData = (user: User) => {
        setSelectedUser(user);
    };

    useEffect(() => {
        console.log(userDetailedData);
    }, [userDetailedData]);

    return (
        <>
            <header className='w-screen container mx-auto px-2 py-7'>
                <div className='flex items-center gap-4 justify-center'>
                    <h1 className='text-center font-bold text-2xl uppercase'>
                        GitHub users
                    </h1>
                    <Icon
                        icon={<FaGithub />}
                        iconSize={'30px'}
                    />
                </div>
            </header>
            <main className='w-screen container mx-auto px-2 py-6'>
                <div className='flex flex-col gap-16'>
                    <div className='flex items-center justify-center gap-16 border px-3 py-5 rounded-md'>
                        <SearchBar
                            inputValue={tempValue}
                            onChangeInputValue={(e) => onChangeInputValue(e)}
                            onSubmitData={(e) => onSubmitData(e)}
                        />
                        <Button
                            text={'reset'}
                            type={'reset'}
                            styles='bg-red-500 rounded-md text-red-100'
                        />
                    </div>
                    <div className='flex w-full justify-between'>
                        <div className='border-r-2 w-1/2'>
                            {users && (
                                <UserList
                                    usersData={users}
                                    onSelectUserData={(user) =>
                                        onSelectUserData(user)
                                    }
                                />
                            )}
                        </div>
                        <UserDetails
                            userName={'name'}
                            userAvatar={''}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default App;
