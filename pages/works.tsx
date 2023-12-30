import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getPostsData, worksDir } from "../lib/posts";
import Link from "next/link";

export default function Works({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | works</title>
      </Head>
      <section className="section">
        <div className="columns is-multiline is-vcentered is-centered is-mobile is-6">
          {allPostsData.map(({ id, title, icon }) => (
            <div
              key={id}
              className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd has-text-centered work"
            >
              <Link href={`/works/${id}`}>
                  <figure className="image is-square is-marginless">
                    <img src={icon} alt="icon for project" />
                  </figure>
                  <p>{title}</p>
              </Link>
              <br />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getPostsData(worksDir);
  return {
    props: {
      allPostsData,
    },
  };
}
