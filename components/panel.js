export default ({ children }) => (
    <section>
        <div className="wrap">{ children }</div>

        <style jsx>{`
            section {
                box-sizing: border-box;
                min-height: 98vh;
                padding: 1em .5em;
            }
        `}</style>
    </section>
)
