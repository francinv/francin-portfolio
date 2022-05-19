import type { NextPage } from 'next'
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import Modal from '../components/common/Modal/Modal';
import CV from '../components/CV/CV';
import Finder from '../components/Finder/Finder';
import HeaderComponent from '../components/Header/HeaderComponent';
import SectionMain from '../components/HomeContent/SectionMain';
import SectionUpper from '../components/HomeContent/SectionUpper';
import Layout from '../components/Layout';
import Terminal from '../components/Terminal/Terminal';
import { PortfolioContext } from '../features/AppContext';

const Home: NextPage = () => {
  const { setModalShowFn, modalType } = useContext(PortfolioContext);

  useEffect(() => {
    setTimeout(() => {
      setModalShowFn(true);
    }, 500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  function getContent() {
    switch (modalType) {
      case 'Terminal':
        return <Terminal />;
      case 'CV':
        return <CV />;
      case 'Projects':
        return <Finder />;
      default:
        return <Terminal />;
    }
  }

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
        {getContent()}
      </Modal>
    </Layout>
  )
}

export default Home;
