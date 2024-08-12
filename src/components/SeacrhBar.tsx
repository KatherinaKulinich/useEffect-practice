import Button from "./Button"

interface SeacrhBarProps {}

const SeacrhBar: React.FC<SeacrhBarProps> = ({}) => {
    return (
        <form>
            <label htmlFor="search"></label>
            <input 
                type="text" 
                id="search" 
                placeholder="user nickname..."
            />
            <Button 
                text='find user' 
                type={"submit"}
            />
        </form>
    )
}

export default SeacrhBar