import styles from "./layout.module.scss";
import Link from "next/link";
import Shader from "./veda";

const name = "sp4ghet";
export const siteTitle = "sp4ghet";

export const Tab = function ({ name, jpText, enText, imgUrl }) {
  return (
    <Link href={`/${name}`} >
      <div className="navbar-item columns is-vcentered is-mobile m-0 p-0 tab">
        <div className="column is-7 ">
          <figure className="image is-128x128">
            <img src={imgUrl}></img>
          </figure>
        </div>
        <div className="column is-vertical p-0 has-text-centered">
          <h1>{enText}</h1>
          <h1>{jpText}</h1>
        </div>
      </div>
    </Link>
  );
};

export default function Layout({ children }) {
  return (
    <div id="container">
      <Shader />
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item" id="navbar-logo">
            <Link href="/">
                <figure className="logo">
                  <img src="/img/icons/title_black.svg" />
                </figure>
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
