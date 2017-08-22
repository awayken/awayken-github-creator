const crypto = require('crypto')
const getGravatarHash = (email) => {
    const cleanEmail = email.replace(' ', '').toLowerCase();

    return crypto.createHash('md5').update(cleanEmail).digest('hex');
}

export default ({ email }) => (
    <div>
        <img src={ `https://www.gravatar.com/avatar/${ getGravatarHash(email) }?s=300` } />

        <style jsx>{`
            img {
                border: 2px solid #606;
                border-radius: 100%;
                box-shadow: 0 0 4px rgba(0, 0, 0, .6);
                display: block;
                margin: 1em auto;
                max-height: 50vh;
                max-width: 100%;
                overflow: hidden;
            }
        `}</style>
    </div>
)
