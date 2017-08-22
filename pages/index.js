import Head from 'next/head'

import Panel from '../components/panel'
import Header from '../components/header'
import Bio from '../components/bio'
import Footer from '../components/footer'

export default () => (
    <div>
        <Head>
            <title>Awayken</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="/static/styles.css" />
        </Head>

        <article>
            <Panel>
                <Header />
            </Panel>
            <Panel>
                <Bio />
            </Panel>
        </article>

        <Footer />

        <style jsx>{`
            article {
                display: flex;
                flex-direction: column;
            }

            div {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            @media (min-height: 20em) {
                div {
                    min-height: 100vh;
                }
            }

            @media (orientation: landscape) {
                article {
                    flex-direction: row;
                }
            }
        `}</style>
    </div>
)
