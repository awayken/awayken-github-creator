export default ({ invert = false, children }) => (
    <section className={ invert ? 'is-inverted' : '' }>
        <div className="wrap">{ children }</div>

        <style jsx>{`
            section {
                box-sizing: border-box;
                min-height: 95vh;
                padding: 1em .5em;
            }

            .is-inverted {
                background: #606;
                color: #fff;
            }
        `}</style>
    </section>
)
