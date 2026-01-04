import React from "react";
import Layout, {siteTitle} from "../../components/layout";
import { getAllPostIds, getPostData, worksDir } from "../../lib/posts";
import Head from "next/head";
import styles from "../../styles/util.module.scss";

declare global {
  interface Window {
    instgrm?: any;
    twttr?: any;
  }
}

interface Props {
  postData: any;
}

export default class Work extends React.Component<Props> {
  componentDidMount() {
    if (
      typeof window !== "undefined" &&
      typeof window.instgrm !== "undefined"
    ) {
      window.instgrm.Embeds.process();
    }
    if (
      typeof window !== "undefined" &&
      typeof window.twttr !== "undefined"
    ) {
      window.twttr?.widgets.load()
    }
  }

  render() {
    const { postData } = this.props;
    return (
      <Layout>
        <Head>
          <title>
            {siteTitle} | {postData.title}
          </title>
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
