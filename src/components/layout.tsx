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

const SiteName = "{iva.dev}"


const Layout = ({ pageTitle, children } : LayoutProps) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <h1 className={heading}>{SiteName}</h1>
      <LinksComponent />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout