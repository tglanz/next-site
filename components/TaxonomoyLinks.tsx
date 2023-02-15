import React from 'react';
import Link from 'next/link';
import * as urls from '../lib/urls';

export interface Props {
  taxonomy: string
  values: string[]
}

const TaxonomyLinks = ({ taxonomy, values }: Props) => {
  if (!values) {
    return undefined;
  }

  return (
    <div>
      <span>{taxonomy}: </span>
      <span>
        {values.map((value, index) => (
          <span key={index} className="inline-block">
            {index > 0 && ", "}
            <Link href={urls.taxonomyArticles(taxonomy, value)} className="underline text-blue-800">
              {value}
            </Link>
          </span>
        ))}
      </span>
    </div>
  )
}

export default TaxonomyLinks;