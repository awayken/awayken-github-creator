export default ({ children }) => (
    <section>
        <div>{ children }</div>

        <style jsx>{`
            section {
                box-sizing: border-box;
                min-height: 85vh;
                min-width: 45vw;
                padding: 1em .5em;
            }

            div {
                margin: 0 auto;
                max-width: 1100px;
            }
        `}</style>
    </section>
)
