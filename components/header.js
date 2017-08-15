import Link from 'next/link'
import Head from 'next/head'

const isProd = process.env.NODE_ENV === 'production';

const defaultTitle = `Miles's History`

export default ({ pageTitle, activeNav = `home` }) => (
    <header>
        <Head>
            <title>{pageTitle ? `${defaultTitle} – ${pageTitle}` : defaultTitle}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="/static/styles.css" />
        </Head>

        <section className="wrap">
            <h2>
                <Link href="/">
                    <a>Awayken</a>
                </Link>
            </h2>

            <nav>
                <Link prefetch={isProd} href="/">
                    <a>Home</a>
                </Link>
            </nav>
        </section>

        <style jsx>{`

        `}</style>
    </header>
)
