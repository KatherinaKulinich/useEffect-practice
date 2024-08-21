import { Octokit } from 'octokit';
import { useEffect, useState } from 'react';
import { User, UserDetailedData } from '../types/User';
import Timer from './Timer';

interface UserDetailsProps {
    selectedUser: User | null;
}

const UserDetails: React.FC<UserDetailsProps> = ({ selectedUser }) => {
    const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
    const initialSecondsValue = 10;

    const [userDetailedData, setUserDetailedData] =
        useState<UserDetailedData | null>(null);

    const [loading, setLoading] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [seconds, setSeconds] = useState<number>(initialSecondsValue);

    useEffect(() => {
        setIsSuccess(false);
        if (selectedUser !== null) {
            setLoading(true);
            const getUserData = async () => {
                const octokit = new Octokit({
                    auth: TOKEN
                });

                const account_id = selectedUser.id;
                const result = await octokit.request('GET /user/{account_id}', {
                    account_id,
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                });
                const userData = result.data;

                const {
                    id,
                    login,
                    avatar_url,
                    followers,
                    following,
                    created_at,
                    bio,
                    location,
                    name
                } = userData;

                const user = {
                    id,
                    login,
                    avatar_url,
                    followers,
                    following,
                    created_at,
                    bio,
                    location,
                    name
                };
                setSeconds(initialSecondsValue);
                setUserDetailedData(user);
                setIsSuccess(true);
                setLoading(false);
            };
            getUserData();
        }
    }, [selectedUser]);

    useEffect(() => {
        if (seconds < 1) {
            setUserDetailedData(null);
        }
    }, [seconds]);

    const {
        login,
        avatar_url,
        followers,
        following,
        created_at,
        bio,
        location,
        name
    } = userDetailedData ?? {};

    if (loading && !isSuccess) {
        return (
            <p className='flex justify-center text-md uppercase text-slate-500'>
                Loading..
            </p>
        );
    }

    const date = created_at && new Date(created_at).getFullYear();

    return (
        <>
            {!loading && isSuccess && userDetailedData && (
                <div className='flex flex-col gap-12 p-4 items-center'>
                    <Timer
                        secondsNumber={seconds}
                        onChangeSeconds={setSeconds}
                    />
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
                            <p>The profile had been created at: {date}</p>
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
            )}
        </>
    );
};

export default UserDetails;
