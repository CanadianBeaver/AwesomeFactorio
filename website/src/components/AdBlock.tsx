import React, { useEffect } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

const AdBlock = () => {
    const { showArticleAds = false } = useThemeConfig() as { showArticleAds?: boolean; };

    useEffect(() => {
        if (showArticleAds && typeof window !== 'undefined') {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.warn('AdSense push failed:', e);
            }
        }
    }, [showArticleAds]);

    if (!showArticleAds) {
        return null; // Не отображать, если отключено
    }

    return (
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
    );
};

export default AdBlock;
