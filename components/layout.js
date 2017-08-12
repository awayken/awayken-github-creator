import Header from './header'
import Footer from './footer'

export default ({ children }) => (
    <article>
        <Header />

        { children }

        <Footer />
    </article>
)
