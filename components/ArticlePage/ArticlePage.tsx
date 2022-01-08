import { Article } from "../../lib/article";
import ArticleContent from "../ArticleContent/ArticleContent";
import Headline from "../Headline";
import hljs from "highlight.js";

import {renderMath} from '../../lib/math';

import TaxonomyLinks from "../TaxonomoyLinks";
import { useEffect } from "react";

export interface Props {
  article: Article
}

const ArticlePage = ({ article }: Props) => {

  useEffect(() => {
    renderMath();
    hljs.highlightAll();
  });

  return (
    <div>
      <Headline title={article.metadata.title} subtitle={""} />
  
      {article.metadata.description
        ? <p>{article.metadata.description}</p>
        : undefined}
  
      <div className="text-sm m-4">
        {article.metadata.categories.length > 0
          ? <TaxonomyLinks taxonomy="Categories" values={article.metadata.categories} />
          : undefined}
        {article.metadata.tags.length > 0
          ? <TaxonomyLinks taxonomy="Tags" values={article.metadata.tags} />
          : undefined}
      </div>
  
      <ArticleContent content={article.content} />
    </div>
  );
};

export default ArticlePage;