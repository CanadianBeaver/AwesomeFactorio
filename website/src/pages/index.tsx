import { JSX } from 'react';

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

import gitDataCommits from '../data/git-commits.json';

type FeatureItem = {
  title: string;
  description: JSX.Element;
  logo: string;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Расскажем как построить фабрику',
    logo: thumbnail1,
    url: '/HowToStartNewGame',
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Покажем много разных чертежей',
    logo: thumbnail2,
    url: '/MiningResources',
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Спалим любой процессор',
    logo: thumbnail3,
    url: '/Additionals/FPSandUPS',
    description: (
      <>
        ...даже 7950X3D
      </>
    ),
  }
];

function Feature({ title, logo, url, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link className="button button--secondary button--lg" to={url}>
          <img className={styles.featureLogo} src={logo} alt='' />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function GitCommits() {
  if (!gitDataCommits || gitDataCommits.length === 0) {
    return null; // ничего не выводим, если нет данных
  }

  function getIconByUrl(url: string): string {
    const icons = [
      '🚀','🏭','🕒','🔧','📦','⚡','🔨','🧪','📈','🛠️','💡','🐞',
      '🎨','🧱','📊','📃','🖼️','🐢','🚧','📜','🧬','🎯','🧰','⚙️'
    ];
    let sum = 0;
    for (let i = 0; i < url.length; i++) {
      sum += url.charCodeAt(i);
    }
    return icons[sum % icons.length];
  }

  return (
    <div className="margin-top--lg">
      <h3>🕒 Последние изменения:</h3>
      <pre>
        {gitDataCommits.slice(0, 6).map((c, i) => (
          <div key={i}>
           {c.date}: {getIconByUrl(c.url)} {c.message}
          </div>
        ))}
      </pre>
      <Link to="/latest">подробнее</Link>
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
          <img src={banner} alt='' />
        </div>
        <div className="row">
          <GitCommits />
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
        {
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/HowToStartNewGame">
            Как начать играть?
          </Link>
        </div>
        }
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="Как построить классную фабрику на 100500 научных пакетов в минуту">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
