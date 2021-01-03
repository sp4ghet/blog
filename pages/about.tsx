import Head from "next/head";
import Layout, { siteTitle, Tab } from "../components/layout";
import { getPostData, pageDir } from "../lib/posts";
import styles from "../styles/util.module.scss";
import Link from "next/link";

export default function About({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | about me</title>
      </Head>

      <article className={`content container ${styles.puff}`}>
        <h1>sp4ghet // Rikuo Hasegawa // 長谷川陸央</h1>
        <img src="/img/icons/icon.png" alt="icon" />

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticProps() {
  const postData = await getPostData("about", pageDir);
  return {
    props: {
      postData,
    },
  };
}
