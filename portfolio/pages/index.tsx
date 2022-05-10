import type { NextPage } from 'next'
import Head from 'next/head';
import { useState } from 'react';
import Modal from '../components/common/Modal';
import HeaderComponent from '../components/Header/HeaderComponent';
import SectionMain from '../components/HomeContent/SectionMain';
import SectionUpper from '../components/HomeContent/SectionUpper';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  const [show, setShow] = useState(true);
  
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
      <Modal show={show}>
        <h1>Modal</h1>
      </Modal>
    </Layout>
  )
}

export default Home;
