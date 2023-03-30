import React from 'react'
import Footer from './components/Footer/Footer'
import HeaderNav from './components/Header/HeaderNav'
import ModalPopUp from './components/modals/ModalPopUp'

export default function Layout(props) {
    return (
        <div id="main-layout">
            <HeaderNav />

            <main className='mt-5 py-5 my-5'>
                {props.children}
            </main>
            <Footer />
            <ModalPopUp />
        </div>
    )
}