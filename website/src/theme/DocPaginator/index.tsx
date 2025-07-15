import React, {useEffect,type ReactNode} from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import type DocPaginatorType from '@theme/DocPaginator';
import type {WrapperProps} from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = WrapperProps<typeof DocPaginatorType>;

export default function DocPaginatorWrapper(props: Props): ReactNode {
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
      <DocPaginator {...props} />
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
