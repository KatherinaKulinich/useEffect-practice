interface UserDetailsProps {
    userName: string;
    userAvatar: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({ userName, userAvatar }) => {
    return (
        <div>
            <div>
                <h2>{userName}</h2>
                <img src={userAvatar} />
            </div>
            <div>
                <p></p>
                <p></p>
            </div>
        </div>
    );
};

export default UserDetails;
