import React from "react";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData, worksDir } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import styles from "../../styles/util.module.scss";

export default class Work extends React.Component {
  componentDidMount() {
    if (
      typeof window !== "undefined" &&
      typeof window.instgrm !== "undefined"
    ) {
      window.instgrm.Embeds.process();
    }
  }

  render() {
    const { postData } = this.props;
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article className={`work-content content container ${styles.puff}`}>
          <h1>{postData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds(worksDir);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, worksDir);
  return {
    props: {
      postData,
    },
  };
}
