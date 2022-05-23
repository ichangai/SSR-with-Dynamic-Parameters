import { useRouter } from 'next/router'

const Product = ({ product }) => 
{
    const router = useRouter()

    if(router.isFallback)
    {
        return <div className="">Loading....</div>
    }

    return (
        <div>
            <h2>
                {product.id}  {product.title} {product.price}
            </h2>
            <p>{product.description}</p>
            <hr />
        </div>
    )
}
export default Product

export const getStaticPaths = async () => {
    const response = await fetch('http://localhost:4000/products')
    const products = await response.json()

    return {
        paths: [{ params: { productId: '1' } }],
        fallback: true,
    }
}


export async function getStaticProps(context) 
{
    const { params } = context
    console.log(`Regenerating product ${params.productId}`);
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json();

    return {
        props: {
            product: data
        },
        revalidate: 1,
    }
}