import React, {useEffect,type ReactNode} from 'react';
import BlogListPaginator from '@theme-original/BlogListPaginator';
import type BlogListPaginatorType from '@theme/BlogListPaginator';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof BlogListPaginatorType>;

export default function BlogListPaginatorWrapper(props: Props): ReactNode {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <>
      <BlogListPaginator {...props} />
      <div style={{ marginTop: '2rem' }}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center' }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-7158690744744856"
          data-ad-slot="9315287584"></ins>
      </div>
    </>
  );
}
