import { Article } from "../../lib/article";
import ArticleCard from "../ArticleCard/ArticleCard";
import Headline from "../Headline";

export interface Props {
  title: string,
  subtitle: string,
  articles: Article[]
}

const ArticleListPage = ({ title, subtitle, articles }: Props) => (
  <div>
    <Headline title={title} subtitle={subtitle} />
    {
      articles.map((article, index) => (
        <div key={index} className="my-8">
          <ArticleCard article={article} />
        </div>
      ))
    }
  </div>
);

export default ArticleListPage;
