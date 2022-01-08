import Link from 'next/link';
import React from 'react';
import { Article } from "../../lib/article";

export interface Props {
  article: Article
}

const Container: React.FC = ({ children }) => (
  <div className="
      p-2
      border border-1 border-neutral-400
      shadow-md">
    {children}
  </div>
)

const TaxonomyValues: React.FC<{ taxonomy: string, values: string[] }> = ({ taxonomy, values }) => (
  <div>
    <p>{taxonomy}</p>
    <div>
      {values.map((value, index) => (
        <div className="inline-block">
          {index > 0 && ", "}
          <Link href={`/${taxonomy.toLowerCase()}/${value}`}>
            <a key={index}>{value}</a>
          </Link>
        </div>
      ))}
    </div>
  </div>
)

function ArticleCard(props: Props) {
  const { article } = props;

  return (
    <Container>
      <p className="text-lg font-bold">{article.metadata.title}</p>

      {article.metadata.description
        ? <p className="text-sm italic">{article.metadata.description}</p>
        : undefined}

      <TaxonomyValues taxonomy="Categories" values={article.metadata.categories} />
      <TaxonomyValues taxonomy="Tags" values={article.metadata.tags} />
    </Container>
  )
}

export default ArticleCard;