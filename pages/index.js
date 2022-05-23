import Link from 'next/link'

function Home() {
    return (
        <>
            <h1>Next JS pre-rendering</h1>
            <Link href="/users">
                <button>Users</button>
            </Link>
            <Link href="/posts">
                <button>Posts</button>
            </Link>
            <Link href="/products">
                <button>Products</button>
            </Link>
            <Link href="/news">
                <button>News</button>
            </Link>
        </>
    )
}

export default Home