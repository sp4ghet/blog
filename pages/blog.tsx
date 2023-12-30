import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { blogDir, getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import styles from "../styles/util.module.scss";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | blog</title>
      </Head>
      <section className={`content container ${styles.puff}`}>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/blog/${id}`}>
                {title}
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(blogDir);
  return {
    props: {
      allPostsData,
    },
  };
}
