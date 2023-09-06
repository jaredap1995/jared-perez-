import React, { useEffect, useState, FC, ReactElement } from 'react';
import Head from 'next/head';
import styles from './404.module.scss';

const FourOhFour: FC = (): ReactElement => {
  return (
    <>
      <Head key="404">
        <title> Sorry. That page doesn't exist.</title>
      </Head>

      <div className={styles.notFoundHolder}>
        <h1>Sorry. That page doesn't exist 😧 </h1>
      </div>
    </>
  );
        }

export default FourOhFour;
