import Link from 'next/link';
import React from 'react';
import { Article } from "../../lib/article";

import * as urls from '../../lib/urls';

export interface Props {
  article: Article
}

const Container: React.FC<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <div className="
      p-4
      border border-1
      cursor-pointer
      transition-colors duration-500
      shadow-md">
      {children}
    </div>
  </Link>
)

const TaxonomyValues: React.FC<{ taxonomy: string, values: string[] }> = ({ taxonomy, values }) => (
  <div className="text-sm">
    <span>{taxonomy}: </span>
    <span>
      {values.map((value, index) => (
        <span key={index} className="inline-block">
          {index > 0 && ", "}
          <Link href={urls.taxonomyArticles(taxonomy, value)}>
            <a className="underline text-blue-800">{value}</a>
          </Link>
        </span>
      ))}
    </span>
  </div>
)

function ArticleCard(props: Props) {
  const { article } = props;

  return (
    <Container href={urls.article(article.id)}>
      <p className="text-2xl font-bold">{article.metadata.title}</p>

      {article.metadata.description
        ? <p className="font-sans">{article.metadata.description}</p>
        : undefined}

      <div className="mb-2" />

      {article.metadata.categories.length > 0
        ? <TaxonomyValues taxonomy="Categories" values={article.metadata.categories} />
        : undefined}

      {article.metadata.tags.length > 0
        ? <TaxonomyValues taxonomy="Tags" values={article.metadata.tags} />
        : undefined}
    </Container>
  )
}

export default ArticleCard;