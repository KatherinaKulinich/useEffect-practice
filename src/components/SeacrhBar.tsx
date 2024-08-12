import Button from './Button';

interface SeacrhBarProps {}

const SeacrhBar: React.FC<SeacrhBarProps> = ({}) => {
    return (
        <form
            method='post'
            action='#'
            className=''
        >
            <label htmlFor='search'></label>
            <input
                type='text'
                id='search'
                placeholder='user nickname...'
                className='border px-3 py-1 w-72 rounded-l-md'
            />
            <Button
                text='find user'
                type={'submit'}
                styles='rounded-r-md bg-sky-500 text-sky-100'
            />
        </form>
    );
};

export default SeacrhBar;
