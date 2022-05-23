import User from '../components/User'

const UserList =  ({ users }) => {
    return (
    <>
    <h1>List of Users</h1>
    {
    users.map((user) => {
        return (
            <div key={user.id}>
                <User user = {user} />
            </div>
        )
    })

    }
    </>
    
    )
}

export default UserList

export const getStaticProps = async() =>  
{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();
    // console.log(users);
    return {
        props: { users: users },
    }
    
}
