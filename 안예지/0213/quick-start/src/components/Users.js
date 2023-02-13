import Profile from "./Profile"

const userList = [{
    id: 1,
    name: '류진숙',
    imageUrl: 'https://dummyimage.com/90/bdaaeb/fffce3&text=dahila',
},
{
    id: 2,
    name: '박혜진',
    imageUrl: 'https://dummyimage.com/90/eba7b3/fffce3&text=jelly',
},
{
    id: 3,
    name: '안예지',
    imageUrl: 'https://dummyimage.com/90/b7ebab/fffce3&text=avocado',
},]

const Users = () => {
    return (
        <div className="Users">
            {userList.map(user =>
                <li key={user.id}>
                    <Profile name={user.name} image={user.imageUrl} />
                </li>)}

        </div>
    )
}
export default Users