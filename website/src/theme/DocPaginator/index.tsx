import React, { type ReactNode } from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import type DocPaginatorType from '@theme/DocPaginator';
import type { WrapperProps } from '@docusaurus/types';
import AdBlock from '@site/src/components/AdsBlock';

type Props = WrapperProps<typeof DocPaginatorType>;

export default function DocPaginatorWrapper(props: Props): ReactNode {
  return (
    <>
      <DocPaginator {...props} />
      <AdBlock />
    </>
  );
}
