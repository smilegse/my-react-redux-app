import React from 'react';
import AppNavBar from "./appNavBar";
import Footer from "./footer";

const Layout = (props) => {
    return (
        <>
            <AppNavBar/>

                <main className="flex-shrink-0">
                    {
                        props.children
                    }
                </main>

                <Footer/>
            </>
        );
    };

export default Layout;