import type { NextPage } from 'next'
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import Modal from '../components/common/Modal/Modal';
import HeaderComponent from '../components/Header/HeaderComponent';
import SectionMain from '../components/HomeContent/SectionMain';
import SectionUpper from '../components/HomeContent/SectionUpper';
import Layout from '../components/Layout';
import Terminal from '../components/Terminal/Terminal';
import { PortfolioContext } from '../features/AppContext';

const Home: NextPage = () => {
  const { setModalShowFn } = useContext(PortfolioContext);

  useEffect(() => {
    setTimeout(() => {
      setModalShowFn(true);
    }, 500);
  }, [])
  
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
      <Modal>
        <Terminal />
      </Modal>
    </Layout>
  )
}

export default Home;
