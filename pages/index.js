import Head from 'next/head'

import Header from '../components/header'
import Bio from '../components/bio'
import Footer from '../components/footer'

export default () => (
    <>
        <Head>
            <title>Awayken</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <main>
            <Header />
            <Bio />
            <Footer />
        </main>

        <style jsx>{`
            main {
                display: grid;
                gap: 1rem;
                grid-template-areas:
                    "header"
                    "bio"
                    "footer";
                min-height: 100vh;
            }

            @media (min-width: 40rem) {
                main {
                    grid-template-areas:
                        "header bio"
                        "footer footer";
                    grid-template-rows: auto min-content;
                }
            }
        `}</style>
    </>
);
