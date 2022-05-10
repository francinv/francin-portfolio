import type { NextPage } from 'next'
import Head from 'next/head';
import { useState } from 'react';
import Modal from '../components/common/Modal/Modal';
import HeaderComponent from '../components/Header/HeaderComponent';
import SectionMain from '../components/HomeContent/SectionMain';
import SectionUpper from '../components/HomeContent/SectionUpper';
import Layout from '../components/Layout';
import Terminal from '../components/Terminal/Terminal';

const Home: NextPage = () => {
  const [show, setShow] = useState(false);
  const [fullSize, setFullSize] = useState(false)

  const handleShowModal = () => {
    setShow((prevState) => !prevState);
  }

  const handleEnhance = () => {
    setFullSize((prevState) => !prevState);
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
        <SectionUpper handleShow={handleShowModal}/>
        <SectionMain />
      </div>
      <Modal show={show} fullSize={fullSize}>
        <Terminal handleEnhance={handleEnhance} handleShow={handleShowModal} />
      </Modal>
    </Layout>
  )
}

export default Home;
