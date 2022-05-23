import { useRouter } from 'next/router'


const Post = ({ post }) => {
    const router = useRouter()

    if(router.isFallback){
        return <h2>Loading....</h2>
    }

    return (
        <>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </>
    )
}

export default Post

export const getStaticPaths = async() => 
{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    return {
        paths: [
            {
                params: { postId: '1' }
            },
            {
                params: { postId: '2' }
            },
            {
                params: { postId: '3' }
            },
        ],
        fallback: true,
    }
}

export const getStaticProps = async(context) => 
{
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post = await response.json()

    if(!post.id){
        return {
            notFound: true
        }
    }

    console.log(`Generating page for /posts/${params.postId}`)
    return {
        props: { post: post }
    }
}