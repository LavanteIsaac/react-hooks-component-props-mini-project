import Article from "./Article"

function ArticleList({posts}) {
   const renderPost = posts.map(({ id, title, date, preview, }) => (
   <Article 
       key={id}
       title={title}
       date={date}
       preview={preview}
        />
   ))
    return (
          <main>
              { renderPost }
        </main>
    )
    
};

export default ArticleList;



