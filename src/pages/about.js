import React from 'react'
import Layout from '../components/layout'
import aboutStyles from '../components/about.module.css'

const AboutPage = () => (
    <Layout>
        <div className={aboutStyles.view}>
            <div className={aboutStyles.hero}></div>
        </div>
    </Layout>
)



export default AboutPage