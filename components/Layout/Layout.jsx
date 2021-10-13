import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

export default function Layout({ children }) {
    return (
        <>
            <div className="app">

                <div className="app-wrap">

                    <div className="loader">
                        <div className="h-100 d-flex justify-content-center">
                            <div className="align-self-center">
                                <img src="assets/img/loader/loader.svg" alt="loader" />
                            </div>
                        </div>
                    </div>

                    <Header />

                    <div className="app-container">
                        <Sidebar />

                        {/* <!-- start app-main --> */}
                        {children}
                        {/* <!-- end app-main --> */}
                    </div>
                    <Footer />
                </div>

            </div>
        </>
    )
}
