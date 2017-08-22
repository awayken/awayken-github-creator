import Gravatar from './gravatar'

export default () => (
    <header>
        <Gravatar email="miles@milesrausch.com" />

        <h1>Miles Rausch</h1>
        <h2>A writer for people and a writer for computers.</h2>

        <style jsx>{`
            header {
                text-align: center;
            }

            h1 {
                font-size: 2em;
            }

            h2 {
                font-size: 1.3em;
                font-style: italic;
                line-height: 1.2;
            }
        `}</style>
    </header>
)
