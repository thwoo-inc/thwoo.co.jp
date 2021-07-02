import Head from 'next/head';
import React from 'react';
import { SITE_NAME } from '../lib/constants';

const Meta = ({ pageTitle }) => {
  return (
    <Head>
      <title>{`${pageTitle} | ${SITE_NAME}`}</title>
    </Head>
  );
};

export default Meta;
