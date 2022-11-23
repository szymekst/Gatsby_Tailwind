import React from 'react'
import Layout from './src/components/layout/Layout'
import './src/css/global.css'

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>
}
