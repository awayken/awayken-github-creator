import Gravatar from './gravatar'

export default () => (
    <header>
        <Gravatar email="miles@milesrausch.com" />

        <h1>Miles Rausch</h1>
        <span>A writer for people and a writer for computers.</span>

        <style jsx>{`
            header {
                align-content: center;
                display: grid;
                grid-area: header;
                padding: 1em .5em;
                text-align: center;
            }

            h1 {
                font-size: 2em;
            }

            span {
                font-size: 1.3em;
                font-style: italic;
                font-weight: bold;
                line-height: 1.2;
            }
        `}</style>
    </header>
)
