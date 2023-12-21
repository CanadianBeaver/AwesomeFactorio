import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import thumbnail1 from './production.png';
import thumbnail2 from './logistics.png';
import thumbnail3 from './intermediate-products.png';

type FeatureItem = {
  title: string;
  description: JSX.Element;
  logo: React.ComponentType<React.ComponentProps<'img'>>;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Легко строить по готовым чертежам',
    logo:  thumbnail1,
    description: (
      <>
        но трудно чертежи подготовить заранее
      </>
    ),
  },
  {
    title: 'Быстро строить роботами',
    logo: thumbnail2,
    description: (
      <>
        если есть готовые чертежи
      </>
    ),
  },
  {
    title: 'Красота прежде всего',
    logo: thumbnail3,
    description: (
      <>
        красота чертежей, потом всё остальное
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

function HomepageFeatures(){
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="text--center">
          <img src="factorio-banner.jpg" />
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
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/HowToStartNewGame">
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
