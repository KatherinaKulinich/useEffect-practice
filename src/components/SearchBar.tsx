import Button from './Button';

interface SeacrhBarProps {
    inputValue: string;
    onChangeInputValue: React.ChangeEventHandler<HTMLInputElement>;
    onSubmitData: React.FormEventHandler<HTMLFormElement>;
}

const SearchBar: React.FC<SeacrhBarProps> = ({
    inputValue,
    onChangeInputValue,
    onSubmitData
}) => {
    return (
        <form
            method='post'
            action='#'
            className=''
            onSubmit={onSubmitData}
        >
            <label htmlFor='search'></label>
            <input
                type='text'
                id='search'
                placeholder='user nickname...'
                className='border px-3 py-1 w-72 rounded-l-md'
                value={inputValue}
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
