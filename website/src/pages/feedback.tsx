import React from 'react';
import Layout from '@theme/Layout';

function GoogleForm() {
  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSf31woTxe6i9mjbadM6jRldPbtdnLlTsgLbfJ-apa09nrCBVw/viewform?embedded=true"
      width="100%"
      height="768"
      title="Google Form"
    >
      Загрузка…
    </iframe>
  );
};

export default function Home(): JSX.Element {
  return (
    <Layout>
      <GoogleForm />
    </Layout>
  );
}
