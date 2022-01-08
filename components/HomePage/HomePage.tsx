import { MetadataAggregation } from "../../lib/article";
import { Content } from "../../lib/content";
import Headline from "../Headline"
import TaxonomyList from "../TaxonomyList/TaxonomyList";

import useConfig from "../utils/useConfig";

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
  <div className="
      m-4 p-4
      shadow shadow-neutral-600
      ">
    <p className="text-xl">{title}</p>
    {children}
  </div>
)

const HomePage = ({ content }: Props) => {
  const config = useConfig();
  return (
    <div>
      <div className="m-4">
        <Headline
          title={config.headline.title}
          subtitle={config.headline.subtitle} />

        <TaxonmiesContainer title="Categories">
          <TaxonomyList items={createTaxonomyListItems(
            content.metadataAggregation.categories,
            key => `/categories/${key}`
          )} />
        </TaxonmiesContainer>

        <TaxonmiesContainer title="Tags">
          <TaxonomyList items={createTaxonomyListItems(
            content.metadataAggregation.tags,
            key => `/tags/${key}`
          )} />
        </TaxonmiesContainer>
      </div>
    </div>
  );
};

export default HomePage;
