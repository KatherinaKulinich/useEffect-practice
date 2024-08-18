import { UserDetailedData } from '../types/User';

interface UserDetailsProps {
    user: UserDetailedData;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
    const {
        id,
        login,
        avatar_url,
        followers,
        following,
        created_at,
        bio,
        location,
        name,
        url
    } = user;

    return (
        <div>
            <div>
                <h2>{login}</h2>
                <img src={avatar_url} />
            </div>
            <div>
                <p></p>
                <p></p>
            </div>
        </div>
    );
};

export default UserDetails;
