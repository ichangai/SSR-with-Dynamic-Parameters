const NewsArticleList = ({ articles }) => {
    return (
        <>
        <h1>List of New Articles</h1>
            {
                articles.map(article => {
                    return(
                    <div key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                    </div>
                    )
                })
            }
        </>
    )
}

export default NewsArticleList

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news');
    const data = await response.json();

    console.log();
    return {
        props: {
            articles: data,
        }
    }
}