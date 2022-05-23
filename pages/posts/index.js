import Link from 'next/link'

const PostList = ({ posts }) => {
    return (
        <>
        {
            posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                        <h4>{post.id}:  {post.title} </h4>
                        </Link>
                        <hr />
                    </div>
                )
            })
        }
        </>
    )
}

export default PostList



export const getStaticProps = async() => 
{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    return{
        props: {
            posts: posts
        },
    }
}