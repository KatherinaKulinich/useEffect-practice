import { FaUserSecret } from 'react-icons/fa';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi2';
import { User } from '../types/User';
import Icon from './Icon';

interface UserListItemProps {
    user: User;
    selectUser: (user: User) => void;
    additionalStyles: string;
}

const UserListItem: React.FC<UserListItemProps> = ({
    user,
    selectUser,
    additionalStyles
}) => {
    let { login } = user;
    login = login?.length > 18 ? `${login.slice(0, 18)}...` : login;

    return (
        <li
            className={`flex items-center justify-between border rounded-md px-4 py-2 cursor-pointer ${additionalStyles}`}
            onClick={() => selectUser(user)}
        >
            <div className='flex items-center gap-6'>
                <Icon
                    icon={<FaUserSecret />}
                    iconSize={'25px'}
                    iconColor=''
                />
                <p className='text-md text-slate-800'>{login}</p>
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
