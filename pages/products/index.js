import Link from 'next/link'

const Productlist = ({ products }) => {
    return (
        <>
            {
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <Link href={`products/${product.id}`} passHref>
                                <h4>{product.id}:  {product.title} {product.price} </h4>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Productlist



export const getStaticProps = async () => {
    console.log('Generating / Regenerating ProductList')
    const response = await fetch('http://localhost:4000/products')
    const products = await response.json()

    return {
        props: {
            products: products
        },
        revalidate: 10,
    }
}