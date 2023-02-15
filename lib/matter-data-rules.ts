import matter from 'gray-matter';

export interface MatterData {
  [key: string]: any;
}

export type MatterDataRule = (matterData: MatterData) => void;

export const apply = (matterData: MatterData, ...rules: MatterDataRule[]) => rules.forEach(rule => rule(matterData));

export const defaultTitle = (defaultTitle: string) => (matterData: MatterData) => {
  if (!matterData.hasOwnProperty("title")) {
    matterData["title"] = defaultTitle;
  }
}

