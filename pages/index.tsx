import Head from "next/head";
import Layout, { siteTitle, Tab } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Shader from "../components/veda";

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Shader />
      <section className="hero is-fullheight">
        <div className="hero-body columns is-centered is-mobile">
          <div className="column is-narrow">
            <div className="columns is-centered is-mobile">
              <div className="column is-narrow">
                <figure className="image">
                  <img src="/img/icons/title_black.svg" />
                </figure>
              </div>
            </div>

            <div className="columns is-narrow is-8">
              <div className="column is-narrow">
                <Tab
                  jpText="作品"
                  enText="works"
                  imgUrl="img/icons/works.png"
                  name="works"
                ></Tab>
              </div>
              <div className="column is-narrow">
                <Tab
                  jpText="ブログ"
                  enText="blog"
                  imgUrl="img/icons/blog.png"
                  name="blog"
                ></Tab>
              </div>
              <div className="column is-narrow">
                <Tab
                  jpText="自己紹介"
                  enText="about me"
                  imgUrl="img/icons/icon.png"
                  name="about"
                ></Tab>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
