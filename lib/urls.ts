export const home = () => '/';
export const taxonomyArticles = (taxonomy: string, value: string) => `/${taxonomy.toLowerCase()}/${value}`;
export const tagArticles = (tag: string) => taxonomyArticles('tags', tag);
export const categroyArticles = (category: string) => taxonomyArticles('categories', category);
export const article = (articleId: string) => `/articles/${articleId}`;