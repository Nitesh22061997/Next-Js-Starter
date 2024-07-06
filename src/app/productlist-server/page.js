async function myfetch() {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json()
    return data.products
}




export default async function Page() {
    let products = await myfetch()
    return (
        <div>
            <h1>Product List</h1>
            {
                products.map((item) => (
                    <div key={item.id}>
                        <h2>Name : {item.title}</h2>
                    </div>
                ))
            }
        </div>
    )
}

