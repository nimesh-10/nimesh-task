import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Slidebar from "../components/slidebar";
import Head from "next/head";
import { Provider, useSelector } from "react-redux";
import store, { persistor } from "@/components/redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Loader from "@/components/loder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // console.log(Component?.PrimaryLayout , "component")
  console.log(pageProps, "pageprops")


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => {
      // setTimeout(() => {
        setLoading(false);
      // }, 1000);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router]);


  return (
    <>
    <Head>
        <title>DashboardApp</title>
        <meta name="description" content="Your meta description goes here. This should be a brief summary of the page content."/>
      </Head>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {loading && <Loader />}
      <div className={`${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-500`}>

        <MainComponent router={router} Component={Component} pageProps={pageProps} />
      </div>
      </PersistGate>
    </Provider>

    </>
  );
}

const MainComponent = ({ router, Component, pageProps}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // const isLoginPage = router.pathname === '/';
  // console.log(isLoginPage , "login")
  console.log(router, "rouder")
  const isLoginPage = Component.PrimaryLayout === false;
  
  return (
  
    <div className="md:flex  itemshow">
        {!isLoginPage && isAuthenticated &&  <Slidebar /> } 
        <div className="w-full">
       {!isLoginPage && isAuthenticated && <Navbar /> }   
        <Component {...pageProps} />
        </div>
        <ToastContainer />
    </div>
    
  );
};

