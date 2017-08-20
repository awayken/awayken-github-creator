export default ({ children }) => (
    <section>
        <div>{ children }</div>

        <style jsx>{`
            section {
                box-sizing: border-box;
                min-height: 85vh;
                min-width: 50vw;
                padding: 1em .5em;
            }

            div {
                margin: 0 auto;
                max-width: 1100px;
            }

            @media (min-height: 768px) {
                section {
                    min-height: 0;
                }
            }
        `}</style>
    </section>
)
