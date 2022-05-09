import type { NextPage } from 'next'
import Head from 'next/head';
import HeaderComponent from '../components/Header/HeaderComponent';
import SectionMain from '../components/HomeContent/SectionMain';
import SectionUpper from '../components/HomeContent/SectionUpper';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Francin Vincent</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent />
      <div>
        <SectionUpper />
        <SectionMain />
      </div>
    </Layout>
  )
}

export default Home;
