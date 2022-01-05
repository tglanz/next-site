import { aggregateMetadata, Article, MetadataAggregation } from './article';
import { readArticle } from './article';

import * as path from 'path';
import * as fs from 'fs/promises';

export interface Content {
  articles: Article[],
  metadataAggregation: {
    tags: MetadataAggregation,
    categories: MetadataAggregation
  }
}

// async function readSection(directoryPath) {
//   const sectionStat = await fs.lstat(directoryPath);
//   if (!sectionStat.isDirectory) {
//     return null;
//   }

//   const indexPath = path.join(directoryPath, '_index.md');
//   const indexStat = await fs.lstat(indexPath);

//   if (!indexStat.isFile()) {
//     return null;
//   }

//   const indexContents = await fs.readFile(indexPath);
//   const indexMatter = matter(indexContents);

//   let articles = [];
//   for (const name of await fs.readdir(directoryPath)) {
//     if (name === "_index.md") {
//       continue;
//     }
//     const articlePath = path.join(directoryPath, name);
//     const article = await readArticle(articlePath);
//     articles.push(article);
//   }

//   return {
//     id: path.basename(directoryPath),
//     articles,
//     data: indexMatter.data,
//     content: indexMatter.content,
//   };
// }


async function getFilesRecursivesly(directoryPath: string): Promise<string[]> {
  let ans: string[] = [];
  for (const entry of await fs.readdir(directoryPath)) {
    const entryPath = path.join(directoryPath, entry);
    const stat = await fs.lstat(entryPath);
    if (stat.isDirectory()) {
      const childs = await getFilesRecursivesly(entryPath);
      ans.push(...childs);
    } else {
      ans.push(entryPath);
    }
  }

  return ans;
}

export async function readContent(directoryPath: string) {
  const files = await getFilesRecursivesly(directoryPath);
  const articles = await Promise.all(files.map(readArticle));
  const metadataAggregation = aggregateMetadata(articles);
  return { articles, metadataAggregation };
}