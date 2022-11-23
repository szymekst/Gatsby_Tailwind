import React from 'react'
import Layout from './src/components/layout/Layout'

// Place Header and Footer between page content
export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>
}

// Preload fonts for the best performance
export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel='preload'
            href='/fonts/... ' // Path to font when in static folder
            as='font'
            type='font/ttf' // Font format (ttf, woff2 etc.)
            crossOrigin="anonymous"
            key='...'// Font Key
        />,
    ])
}
