import * as React from 'react'
import {
  container,
  heading
} from './layout.module.css'
import LinksComponent from './links'

interface LayoutProps {
  pageTitle?: string,
  children?: JSX.Element
}


const Layout = ({ pageTitle, children } : LayoutProps) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        <LinksComponent />
        {children}
      </main>
    </div>
  )
}

export default Layout