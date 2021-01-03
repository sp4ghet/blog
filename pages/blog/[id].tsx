import React from "react";
import Layout, { siteTitle } from "../../components/layout";
import { getAllPostIds, getPostData, blogDir } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import styles from "../../styles/util.module.scss";

declare global {
  interface Window {
    instgrm?: any;
  }
}

interface Props {
  postData: any;
}

export default class BlogPost extends React.Component<Props> {
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
          <title>
            {siteTitle} | {postData.title}
          </title>
        </Head>
        <article className={`content container ${styles.puff}`}>
          <h1>{postData.title}</h1>
          <div>
            <Date dateString={postData.date} />
            <hr />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds(blogDir);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, blogDir);
  return {
    props: {
      postData,
    },
  };
}
