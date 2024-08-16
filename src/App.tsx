// import './App.css'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Button from './components/Button';
import Icon from './components/Icon';
import SearchBar from './components/SearchBar';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';

const App: React.FC = ({}) => {
    const [users, setUsers] = useState();
    const [selectedUser, setSelectedUser] = useState();
    const [tempValue, setTempValue] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const api = 'https://api.github.com/search/users?q=';

    useEffect(() => {
        if (searchValue) {
            axios.get(`${api}${searchValue}`).then((result) => {
                console.log(result.data);
                setUsers(result.data.items);
            });
        }
    }, [searchValue]);

    const onChangeInputValue: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.currentTarget.value
        setTempValue(value)
    };

    const onSubmitData: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        setSearchValue(tempValue);
    };

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
                    <div className='flex w-full items-center justify-between'>
                        <div className='border-r-2 w-1/2'>
                            <UserList usersData={[]} />
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
