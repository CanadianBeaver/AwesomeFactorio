import React, { type ReactNode } from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import type BlogPostPaginatorType from '@theme/BlogPostPaginator';
import type { WrapperProps } from '@docusaurus/types';
import AdBlock from '@site/src/components/AdBlock';

type Props = WrapperProps<typeof BlogPostPaginatorType>;

export default function BlogPostPaginatorWrapper(props: Props): ReactNode {
  return (
    <>
      <BlogPostPaginator {...props} />
      <AdBlock />
    </>
  );
}
