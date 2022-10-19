const copyrightYear = new Date().getFullYear()

export default ({ year }) => (
    <footer>
        <p>&copy; {year ? year : copyrightYear} Miles Rausch</p>

        <nav>
            <a href="http://www.milesrausch.com/">MilesRausch.com</a>
            <a href="http://miles.ink/">Miles.ink</a>
            <a href="https://github.com/awayken">GitHub/awayken</a>
        </nav>

        <style jsx>{`
            footer {
                background: #606;
                color: #fff;
                padding: 2em .5em;
                text-align: center;
            }

            a,
            a:link,
            a:visited {
                color: currentColor;
                text-decoration: underline;
            }

            a:hover,
            a:active,
            a:focus {
                text-decoration: none;
            }

            nav a {
                display: inline-block;
                padding: 0 .25em;
            }
        `}</style>
    </footer>
)
