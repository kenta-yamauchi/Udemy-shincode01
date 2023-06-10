import Link from "next/link";

import Layout, { siteTitle } from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import utilStyles from "@/styles/utils.module.css";
import { getPostsData } from "@/lib/post";
import Head from "next/head";

///SSGの場合(外部データより最初の1回だけデータを持ってくる)
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

//SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントに渡すprops
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            私はフルスタックエンジニアです/Udemy講師として活動しています/好きな言語はJavascriptです
          </p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2>🗒エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={`${thumbnail}`} className={styles.thumbnailImage} />
                </Link>
                <Link href={`/posts/${id}`}>
                  <a className={utilStyles.boldText}>{title}</a>
                </Link>
                <small className={utilStyles.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
