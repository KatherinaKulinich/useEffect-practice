import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    text: string;
    type: 'button' | 'submit' | 'reset';
    styles: string;
}

const Button: React.FC<ButtonProps> = ({ text, type, styles }) => {
    return (
        <button
            type={type}
            className={`px-3 py-1 ${styles} border uppercase `}
        >
            {text}
        </button>
    );
};

export default Button;
