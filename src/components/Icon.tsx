import { IconContext } from 'react-icons';

interface IconProps {
    icon: React.ReactNode;
    iconColor?: string;
    iconSize: string;
}

const Icon: React.FC<IconProps> = ({ icon, iconSize, iconColor }) => {
    return (
        <IconContext.Provider value={{ color: iconColor, size: iconSize }}>
            {icon}
        </IconContext.Provider>
    );
};

export default Icon;
