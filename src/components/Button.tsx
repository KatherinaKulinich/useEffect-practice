
interface ButtonProps {
    text: string;
    type: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({text, type}) => {
    return (
        <button type={type} className="px-4 py-2">
            {text}
        </button>
    )
}

export default Button