import { FaUserSecret } from 'react-icons/fa';
import Icon from './Icon';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi2';

interface UserListItemProps {
    userName: string;
}

const UserListItem: React.FC<UserListItemProps> = ({ userName }) => {
    return (
        <li className='flex items-center justify-between border rounded-md px-4 py-2 cursor-pointer bg-sky-50'>
            <div className='flex items-center gap-6'>
                <Icon
                    icon={<FaUserSecret />}
                    iconSize={'25px'}
                    iconColor=''
                />
                <p className='text-xl text-slate-800'>{userName}</p>
            </div>
            <Icon
                icon={<HiOutlineChevronDoubleRight />}
                iconSize={'25px'}
                iconColor=''
            />
        </li>
    );
};

export default UserListItem;
