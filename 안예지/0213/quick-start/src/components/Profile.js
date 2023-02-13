import { useState } from "react"

const Profile = ({ name, image }) => {

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    const handleSet = () => {
        setCount(0);
    }

    return (
        <div className="Profile">
            <div className="user-info">
                <div>{name}</div>
                <img src={image} />
            </div>
            <div className="user-buttons">
                <button onClick={handleClick}>
                    눌러
                </button>
                <span>{count}</span>
                <button onClick={handleSet}>
                    에잇
                </button>
            </div>
        </div>

    )
}

export default Profile