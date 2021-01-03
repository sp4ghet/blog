import Head from "next/head";
import styles from "./layout.module.scss";
import Link from "next/link";
import Veda from "vedajs";
import { ElementType } from "react";
import Shader from "./veda";

const name = "sp4ghet";
export const siteTitle = "sp4ghet";

export const Tab = function ({ name, jpText, enText, imgUrl }) {
  return (
    <Link href={`/${name}`}>
      <a className="navbar-item columns is-vcentered is-mobile is-marginless is-paddingless tab">
        <div className="column is-7">
          <figure className="image is-128x128">
            <img src={imgUrl}></img>
          </figure>
        </div>
        <div className="column is-vertical has-text-centered">
          <h1>{enText}</h1>
          <h1>{jpText}</h1>
        </div>
      </a>
    </Link>
  );
};

function doVeda(a) {
  if (typeof window !== "undefined") {
    console.log(typeof window);
    const veda = new Veda();

    const canvas: HTMLCanvasElement = document.querySelector(
      "canvas.background"
    );

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    veda.setCanvas(canvas);

    const vedaInit = () => {
      const code = client.responseText;

      veda.loadFragmentShader(code);
      veda.play();
    };

    const client = new XMLHttpRequest();

    client.open("GET", "/shaders/curl.frag");
    client.onload = vedaInit;

    client.send();

    const vedaResize = () => {
      veda.resize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", vedaResize, true);
  }
}

export default function Layout({ children }) {
  return (
    <div id="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="ようこそインターネット" />
        <meta property="og:image" content="public/img/icons/icon.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossorigin="anonymous"
        />

        <script async src="//www.instagram.com/embed.js"></script>
      </Head>
      <Shader />
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item" id="navbar-logo">
            <Link href="/">
              <a>
                <figure className="image">
                  <img src="/img/icons/title_black.svg" />
                </figure>
              </a>
            </Link>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <Tab
              jpText="作品"
              enText="works"
              imgUrl="/img/icons/works.png"
              name="works"
            ></Tab>
            <Tab
              jpText="ブログ"
              enText="blog"
              imgUrl="/img/icons/blog.png"
              name="blog"
            ></Tab>
            <Tab
              jpText="自己紹介"
              enText="about"
              imgUrl="/img/icons/icon.png"
              name="about"
            ></Tab>
          </div>
        </div>
      </nav>

      <main className={`container ${styles.content}`}>{children}</main>
    </div>
  );
}
