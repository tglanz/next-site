import { Article } from "../../lib/article";

export interface Props {
  title: string,
  articles: Article[]
}

export default ({ title, articles }: Props) => (
  <div>
    <p className="text-2xl">{title}</p>
    {
      articles.map(article => (
        <p>{article.metadata.title}</p>
      ))
    }
  </div>
);