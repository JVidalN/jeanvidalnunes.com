import { ThemeProvider } from 'next-themes';
import App from 'next/app';
import React from 'react';
import '../styles/global.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider>
        <style jsx global>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&family=Titillium+Web:wght@400;700&display=swap');
          `}
        </style>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
