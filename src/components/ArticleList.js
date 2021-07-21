import Article from "./Article"

function ArticleList( { posts } ) {
    return (
        <main>
            {posts.map(post => {
                return (
                    <Article 
                    titleName={post.title}
                    date={post.date}
                    minute={post.minutes}
                    preview={post.preview}
                    key={post.id}
                    />
                )
            })}
        </main>

    )
}

export default ArticleList;