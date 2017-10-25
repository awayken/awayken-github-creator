import React from 'react'

export default class extends React.PureComponent {
    componentDidMount () {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(() => {
                    console.log('serviceWorker registration successful.')
                })
                .catch(err => {
                    console.warn('serviceWorker registration failed:', err.message)
                })
        }
    }
    render () {
        return (
            <span />
        )
    }
}
