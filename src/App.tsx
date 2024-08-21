import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Button from './components/Button';
import Icon from './components/Icon';
import SearchBar from './components/SearchBar';
import UserDetails from './components/UserDetails';
import UsersList from './components/UsersList';
import { User } from './types/User';

const App: React.FC = ({}) => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [searchValue, setSearchValue] = useState('');

    const onSubmitData = (
        event: React.FormEvent<HTMLFormElement>,
        value: string
    ) => {
        event.preventDefault();
        if (value.trim() !== '') {
            setSearchValue(value);
        }
    };

    const onSelectUserData = (user: User | null) => {
        setSelectedUser(user);
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
                <div className='flex flex-col gap-10 items-center'>
                    <div className='flex items-center justify-center gap-16 border px-10 py-5 rounded-md'>
                        <SearchBar
                            inputValue={searchValue}
                            onSubmitData={onSubmitData}
                        />
                        <Button
                            text={'reset'}
                            type={'reset'}
                            styles='bg-red-500 rounded-md text-red-100'
                            onClick={() => setSearchValue('')}
                        />
                    </div>
                    <div className='flex w-full p-4'>
                        <div className='border-r-2 w-1/2'>
                            <UsersList
                                onSelectUserData={onSelectUserData}
                                searchRequest={searchValue}
                                selectedUser={selectedUser}
                                clearSearchRequest={setSearchValue}
                            />
                        </div>
                        <div className='w-1/2'>
                            {selectedUser && (
                                <>
                                    <UserDetails selectedUser={selectedUser} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default App;
