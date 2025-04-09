import articles from "../article-content";
import ArticleList from "../ArticlesList";
export default function ArticlesListPage() {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </>

  );
}
