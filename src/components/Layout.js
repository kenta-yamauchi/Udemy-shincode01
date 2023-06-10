import Head from "next/head";

import styles from "./Layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Shin Code";
export const siteTitle = "Udemy-shincode01";

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile.png"
              className={utilsStyles.borderCircle}
            />
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">⇦ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
