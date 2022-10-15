import Head from "next/head";
import React from "react";

const HeadTemplate = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content="Merkle Innovation Frontend Test" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTemplate;
