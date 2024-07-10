async function userList() {
    let data = await fetch("https://dummyjson.com/users")
    data = await data.json()
    return data.users
}


export default async function Page() {
    let users = await userList()
    return (
        <main >
            <h1>Loader Component </h1>
            <h2>
                {
                    users.map((item) => (
                        <div key={item.id}>User name : {item.firstName}</div>
                    ))
                }
            </h2>
        </main>
    );
}
