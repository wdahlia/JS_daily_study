const Profile = ({ name, image }) => {
    return (
        <div className="user">
            <div>이름 : {name}</div>
            <img src={image} />
        </div>

    )
}

export default Profile