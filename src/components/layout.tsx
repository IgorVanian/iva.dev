import { Link } from 'gatsby'
import * as React from 'react'
import {
  container,
  heading,
  siteTitle,
  cursor,
  header
} from './layout.module.css'
import LinksComponent from './links'
import { useLocation } from '@reach/router'

interface LayoutProps {
  pageTitle?: string,
  children?: JSX.Element
}

const SiteName = "{iva.dev}"


const Layout = ({ pageTitle, children } : LayoutProps) => {
  const location = useLocation();
  
  return (
    <div className={container}>
      <div className={header}>
        <title>{pageTitle}</title>
        <LinksComponent />
        <div>
          <h1 className={siteTitle}>{SiteName}<span className={cursor}>|</span></h1>
        </div>
        <div>
          {
            location.pathname != '/' &&
            <Link to="/">Retour</Link>
          }
          <h1 className={heading}>{pageTitle}</h1>
        </div>
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout