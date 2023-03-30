import React from 'react'
import OfferContent from './components/Content/OfferContent'
import TitleContent from './components/Content/TitleContent'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


export default function Layout(props) {
    return (
        <div id="main-layout container py-3">
            <Header />

            <main className='mt-20 py-10'>
                {props.children}
            </main>
            {/* <TitleContent/>
            <OfferContent/> */}
            <Footer/>
        </div>
    )
}