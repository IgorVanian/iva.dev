import { Link } from 'gatsby';
import * as React from 'react'

import * as PresentationBoxStyles from './presentationBox.module.css';

interface PresentationBoxProps {
  title?: string,
  linkTitle?: string,
  link?: string,
  children?: JSX.Element
}

const PresentationBox = ({ title, linkTitle, link, children }: PresentationBoxProps) => {
  return (
    <div className={PresentationBoxStyles.container}>
      <h2>{title}</h2>
      {children}
      {
        link &&
        <div className={PresentationBoxStyles.link}>
          <Link to={link}>
            {linkTitle}
          </Link>
        </div>
      }
    </div>
  )
}

export default PresentationBox;