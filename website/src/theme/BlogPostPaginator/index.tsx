import React, {useEffect,type ReactNode} from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import type BlogPostPaginatorType from '@theme/BlogPostPaginator';
import type {WrapperProps} from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = WrapperProps<typeof BlogPostPaginatorType>;

export default function BlogPostPaginatorWrapper(props: Props): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const showAds = (siteConfig.themeConfig as { showAds?: boolean })?.showAds ?? false;
  const isProduction = process.env.NODE_ENV === 'production';
  const _showAds_ = showAds && isProduction;

  useEffect(() => {
    if (_showAds_ && typeof window !== 'undefined') {
      try {
        if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, [_showAds_]);

  return (
    <>
      <BlogPostPaginator {...props} />
      {_showAds_ && (
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
