export default function User() {
    return (
        <div>
            <h2>This is User Page</h2>
        </div>
    )
}

export function generateMetadata({ params }) {
    return {
        title: "User page title"
    }
}

