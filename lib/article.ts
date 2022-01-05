import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const MANDATORY_METADATA_FIELDS = ["title"];

export interface MetadataAggregationStats {
  count: number
}

export interface MetadataAggregation {
  [key: string]: MetadataAggregationStats
}

export interface ArticleMetadata {
  title: string,
  priority: number,
  tags: string[],
  categories: string[],
}

export interface ArticleContent {
  raw: string,
  html: string,
}

export interface Article {
  url: string,
  metadata: ArticleMetadata,
  content: ArticleContent
}

export async function readArticle(filePath: string): Promise<Article> {
  const articleContents = await fs.readFile(filePath);
  const articleMatter = matter(articleContents);

  // .replace(/.*(\.[^\.]+)$/, '')
  // const id = path.basename(filePath).replace(/(\.[^\.]+)$/, '')

  const processedContent = await remark()
    .use(remarkHtml)
    .process(articleMatter.content)

  const contentHtml = processedContent.toString()

  const matterData = articleMatter.data;

  MANDATORY_METADATA_FIELDS.forEach(mandatory => {
    if (!matterData.hasOwnProperty(mandatory)) {
      throw new Error(`Mandatory metadata field "${mandatory}" is missing in ${filePath}`)
    }
  });

  const metadata: ArticleMetadata = {
    title: matterData.title,
    priority: matterData.priority || 0,
    tags: matterData.tags || [],
    categories: matterData.categories || [],
  }

  return {
    url: filePath,
    metadata,
    content: {
      raw: articleMatter.content,
      html: contentHtml,
    },
  };
}

export function aggregateMetadata(articles: Article[]) {
  let categories: MetadataAggregation = {};
  let tags: MetadataAggregation = {};

  articles.forEach(article => {
    article.metadata.categories.forEach(category => {
      categories[category] = categories[category] || {count: 0};
      categories[category].count += 1;
    });

    article.metadata.tags.forEach(tag => {
      tags[tag] = tags[tag] || {count: 0};
      tags[tag].count += 1;
    });
  });

  return { categories, tags };
}