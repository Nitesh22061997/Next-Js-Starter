async function getUsers(id) {
    let data = await fetch(`http://localhost:3000/api/user/${id}`)
    data = await data.json()
    return data
}

export default async function page({ params }) {
    const user = await getUsers(params.userid)
    console.log(user);
    return (
        <div>
            <div>User List</div>
            <h5>Name: {user.name}</h5>
            <h5>Age: {user.age}</h5>
            <h5>Email: {user.email}</h5>
            <h5>Id: {user.id}</h5>
        </div>
    )
}
