import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import banner from './factorio-banner.jpg';

import thumbnail1 from './production.png';
import thumbnail2 from './logistics.png';
import thumbnail3 from './intermediate-products.png';

type FeatureItem = {
  title: string;
  description: JSX.Element;
  logo: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Расскажем как построить фабрику',
    logo: thumbnail1,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Покажем много разных чертежей',
    logo: thumbnail2,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Спалим любой процессор',
    logo: thumbnail3,
    description: (
      <>
        ...даже 7950X3D
      </>
    ),
  }
];

function Feature({ title, logo, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureLogo} src={logo} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="text--center">
          <img src={banner} />
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title addStroke">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle addStroke">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/HowToStartNewGame">
            Как начать играть?
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="How to build an awesome factory? It is over 9,000 science packs per minute...">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
