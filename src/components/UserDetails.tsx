import { UserDetailedData } from '../types/User';

interface UserDetailsProps {
    user: UserDetailedData;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
    const {
        login,
        avatar_url,
        followers,
        following,
        created_at,
        bio,
        location,
        name
    } = user;

    return (
        <div className='flex flex-col gap-12 p-4 items-center'>
            <img
                className='rounded-full w-72 h-72'
                src={avatar_url}
            />
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col items-center'>
                        <h2 className='font-bold text-xl'>{login}</h2>
                        <p className='font-light text-md text-slate-600'>
                            {name}
                        </p>
                    </div>
                    <p className='text-sm'>{bio}</p>
                </div>
                <div className='font-light text-sm text-slate-600'>
                    <p>{location}</p>
                    <p>Profile had been created at: {created_at}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 text-md text-slate-600 font-semibold'>
                        <p>Followers:</p>
                        <p>{followers}</p>
                    </div>
                    <div className='flex items-center gap-2 text-md text-slate-600 font-semibold'>
                        <p>Following:</p>
                        <p>{following}</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <a
                    href={`https://github.com/${login}`}
                    target='_blank'
                    className='px-4 py-2 border rounded-lg uppercase bg-sky-500 text-sky-50 font-bold'
                >
                    Go to GitHub profile
                </a>
            </div>
        </div>
    );
};

export default UserDetails;
