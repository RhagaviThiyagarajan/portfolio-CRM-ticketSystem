import React from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'
function DefaultLayout({children}) {
  return (
    <div>
        <div className="default-layout">
<header className="header mb-2">
        <Header/>
        </header>
        <main className="main">{children}
 
        </main>

        <div className="footer">
        <Footer/>
        </div>

    </div>
    </div>
  )
}

export default DefaultLayout
