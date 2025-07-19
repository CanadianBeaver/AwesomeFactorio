import React, { type ReactNode } from 'react';
import BlogListPaginator from '@theme-original/BlogListPaginator';
import type BlogListPaginatorType from '@theme/BlogListPaginator';
import type { WrapperProps } from '@docusaurus/types';
import AdBlock from '@site/src/components/AdBlock';

type Props = WrapperProps<typeof BlogListPaginatorType>;

export default function BlogListPaginatorWrapper(props: Props): ReactNode {
  return (
    <>
      <BlogListPaginator {...props} />
      <AdBlock />
    </>
  );
}
