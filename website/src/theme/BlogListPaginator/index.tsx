import React, { useEffect, type ReactNode } from 'react';
import BlogListPaginator from '@theme-original/BlogListPaginator';
import type BlogListPaginatorType from '@theme/BlogListPaginator';
import type { WrapperProps } from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = WrapperProps<typeof BlogListPaginatorType>;

export default function BlogListPaginatorWrapper(props: Props): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const showAds = (siteConfig.themeConfig as { showAds?: boolean })?.showAds ?? false;

  useEffect(() => {
    if (showAds && typeof window !== 'undefined') {
      try {
        if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, [showAds]);

  return (
    <>
      <BlogListPaginator {...props} />
      {showAds && (
        <div style={{ marginTop: '2rem' }}>
          <ins
            className="adsbygoogle"
            style={{ display: 'block', textAlign: 'center' }}
            data-ad-client="ca-pub-7158690744744856"
            data-ad-slot="9315287584"
            data-ad-format="fluid"
            data-ad-layout="in-article"
          />
        </div>
      )}
    </>
  );
}
