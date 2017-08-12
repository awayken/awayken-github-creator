import React from 'react'

const copyrightYear = new Date().getFullYear()

export default ({ year }) => (
    <footer>
        <section className="wrap">
            <span>&copy; {year ? year : copyrightYear} Miles Rausch. All Rights Reserved, I guess.</span>

            <nav>
                <a href="https://github.com/awayken">GitHub</a>
                <a href="https://twitter.com/awayken">@awayken</a>
                <a href="mailto:miles@milesrausch.com">miles@milesrausch.com</a>
            </nav>
        </section>

        <style jsx>{`
            footer {
                background: #000;
                color: #fff;
            }
        `}</style>
    </footer>
)
