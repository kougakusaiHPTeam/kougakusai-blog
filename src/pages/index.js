import fs from 'fs';
import matter from 'gray-matter';
import Layout from '../../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import Icon from '../comonents/atoms/icon.js';
import Title from '../comonents/organisms/title';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>記事</title>
      </Head>
      <Layout>
        <div>
          <Title title="記事一覧" />
          <hr className="mb-2"></hr>
          {posts.map(({ frontmatter: { title, description, updatedAt }, slug }) => (
            <article key={slug}>
              <Link href="/post/[slug]" as={`/post/${slug}`}>
                <div className="flex flex-row cursor-pointer">
                  <div className="flex flex-col">
                    <header className="my-2">
                      <h3 className="m-0">
                        <a className="text-xl font-semibold text-k-black no-underline hover:no-underline">
                          {title}
                        </a>
                      </h3>
                    </header>
                    <section className="flex flex-row flex-nowrap mb-4 text-xl">
                      <p className="m-0 text-k-darkgray">{updatedAt}</p>
                      <p className="ml-8 m-0 text-k-pink">{description}</p>
                    </section>
                  </div>
                </div>
              </Link>
              <hr className="mb-2"></hr>
            </article>
          ))}
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(`content/posts/${filename}`).toString();

    const { data } = matter(markdownWithMetadata);

    const formattedDate = data.updatedAt;

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace('.mdx', ''),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
