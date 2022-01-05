import Recat from 'react';
import { MetadataAggregation } from "../../lib/article";
import { Content } from "../../lib/content";
import Headline from "../Headline"
import TaxonomyList from "../TaxonomyList/TaxonomyList";

interface Props {
  content: Content
}

const createTaxonomyListItems = (
  metadataAggregation: MetadataAggregation,
  createHref: (key: string) => string,
) => Object.entries(metadataAggregation)
  .map(([key, value]) => ({
    display: key,
    href: createHref(key),
    count: value.count,
  }));

const TaxonmiesContainer: React.FC<{ title: string }> = ({ title, children }) => (
  <div className="m-4 p-4">
    <p className="text-xl">{title}</p>
    {children}
  </div>
)

export default ({ content }: Props) => {
  return (
    <div>
      <div className="m-4">
        <Headline />

        <TaxonmiesContainer title="Categories">
          <TaxonomyList items={createTaxonomyListItems(
            content.metadataAggregation.categories,
            key => `/category/${key}`
          )} />
        </TaxonmiesContainer>

        <TaxonmiesContainer title="Tags">
          <TaxonomyList items={createTaxonomyListItems(
            content.metadataAggregation.tags,
            key => `/tag/${key}`
          )} />
        </TaxonmiesContainer>
      </div>
    </div>
  );
};