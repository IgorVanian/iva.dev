import * as React from 'react'
import {
  container,
  heading,
  siteTitle,
  cursor,
  header
} from './layout.module.css'
import LinksComponent from './links'

interface LayoutProps {
  pageTitle?: string,
  children?: JSX.Element
}

const SiteName = "{iva.dev}"


const Layout = ({ pageTitle, children } : LayoutProps) => {
  return (
    <div className={container}>
      <div className={header}>
        <title>{pageTitle}</title>
        <LinksComponent />
        <div>
          <h1 className={siteTitle}>{SiteName}<span className={cursor}>|</span></h1>
        </div>
        <h1 className={heading}>{pageTitle}</h1>
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout