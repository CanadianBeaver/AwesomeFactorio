import React, { useEffect } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

const AdBlockSide = () => {
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
            <ins class="adsbygoogle"
                style={{ display: 'block', textAlign: 'center' }}
                data-ad-client="ca-pub-7158690744744856"
                data-ad-slot="1554704293"
                data-ad-format="auto"
                data-full-width-responsive="true" />
        </div>
    );
};

export default AdBlockSide;
