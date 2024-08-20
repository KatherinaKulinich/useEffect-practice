import { useEffect, useState } from 'react';
import Button from './Button';

interface SeacrhBarProps {
    inputValue: string;
    onSubmitData: (
        event: React.FormEvent<HTMLFormElement>,
        value: string
    ) => void;
}

const SearchBar: React.FC<SeacrhBarProps> = ({ inputValue, onSubmitData }) => {
    const [tempValue, setTempValue] = useState('');

    useEffect(() => {
        setTempValue(inputValue);
    }, [inputValue]);

    const onChangeInputValue: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.currentTarget.value;
        setTempValue(value);
    };

    return (
        <form
            method='post'
            action='#'
            className=''
            onSubmit={(e) => onSubmitData(e, tempValue)}
        >
            <label htmlFor='search'></label>
            <input
                type='text'
                id='search'
                placeholder='user nickname...'
                className='border px-3 py-1 w-72 rounded-l-md'
                value={tempValue}
                onChange={onChangeInputValue}
            />
            <Button
                text='find user'
                type={'submit'}
                styles='rounded-r-md bg-sky-500 text-sky-100'
            />
        </form>
    );
};

export default SearchBar;
