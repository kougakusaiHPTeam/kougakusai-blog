import Link from 'next/link';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { Embed } from 'theme-ui';
import Footer from 'src/comonents/organisms/footer';
import React, { useState } from 'react';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Layout({ children }, props) {
  const { pathname } = useRouter();
  const isRoot = pathname === '/';

  const [menu, setMenu] = useState(false);
  const clickMenu = () => {
    setMenu(!menu);
  };

  const shortcodes = { Embed };
  const header = isRoot ? (
    <h1 className="mb-16">
      <Link href="/bloglist">
        <a className="text-6xl font-black text-black no-underline bg-gray-300">
          こうがく祭HP村技術ブログ
        </a>
      </Link>
    </h1>
  ) : (
    <h1 className="mb-16">
      <Link href="/bloglist">
        <a className="text-6xl font-black text-black no-underline bg-gray-300">
          こうがく祭HP村技術ブログ
        </a>
      </Link>
    </h1>
  );

  return (
    <div className="min-h-screen">
      <header>
        <nav className="bg-gray-800 fixed w-full">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center bg-k-indigo justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={clickMenu}
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:justify-between	">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <img
                      className="block lg:hidden w-auto cursor-pointer"
                      src={prefix + '/img/logo_white.svg'}
                      alt="Workflow"
                      height="60"
                      width="60"
                    />
                  </Link>
                  <Link href="/">
                    <img
                      className="hidden lg:block w-auto cursor-pointer"
                      src={prefix + '/img/logo_white.svg'}
                      alt="Workflow"
                      height="60"
                      width="60"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link href="/">
                      <a
                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                        aria-current="page"
                      >
                        記事一覧
                      </a>
                    </Link>
                    <Link href="/about">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        このサイトについて
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        お問い合わせ
                      </a>
                    </Link>

                    {/* <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Calendar
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={menu ? ' sm:hidden' : 'hidden'} id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/">
                <a
                  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  aria-current="page"
                >
                  記事一覧
                </a>
              </Link>

              <Link href="/about">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  このサイトについて
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  お問い合わせ
                </a>
              </Link>

              {/* <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </a> */}
            </div>
          </div>
        </nav>
        <div className="bg-hero-pattern w-full h-130 inline-block mt-header sm:h-315 bg-cover bg-center bg-no-repeat"></div>
        {/* <img src="/img/header.jpg" className="w-full text-center h-auto " /> */}
      </header>
      <MDXProvider components={shortcodes}>
        <main {...props} />
      </MDXProvider>

      <main className="container min-h-screen p-8 w-4/5 mx-auto">{children}</main>
      {/* <footer>
        <Link href="/bloglist">
          <p className="text-right">
            <a className="font-black text-black ">記事一覧</a>
          </p>
        </Link>
        <Link href="/">
          <p className="text-right">
            <a className="font-black text-black">ホーム</a>
          </p>
        </Link>
      </footer> */}
      <Footer />
    </div>
  );
}
