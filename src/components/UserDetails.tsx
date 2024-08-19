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
        name,
    } = user;

    return (
        <div>
            <img src={avatar_url} />
            <div>
                <div>
                    <h2>{login}</h2>
                    <p>{name}</p>
                    <p>{bio}</p>
                </div>
                <div>
                    <p>{location}</p>
                    <p>Profile had been created at: {created_at}</p>
                </div>
                <div>
                    <div>
                        <p>Followers:</p>
                        <p>{followers}</p>
                    </div>
                    <div>
                        <p>Following:</p>
                        <p>{following}</p>
                    </div>
                </div>
            </div>
            <a
                href={`https://github.com/${login}`}
                target='_blank'
            >
                Go to GitHub profile
            </a>
        </div>
    );
};

export default UserDetails;
