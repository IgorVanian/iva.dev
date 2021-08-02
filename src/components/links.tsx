import * as React from 'react'
import { Images } from '../images'

const Social = [{
  title: 'GitHub',
  image: 'github',
  link: 'https://github.com/IgorVanian'
}, {
  title: 'LinkedIn',
  image: 'linkedin',
  link: 'https://www.linkedin.com/in/igorvanian/'
}, {
  title: 'Twitter',
  image: 'twitter',
  link: 'https://twitter.com/IgorVanian'
}, {
  title: 'hi@iva.dev',
  image: 'email',
  link: 'mailto:hi@iva.dev'
}]

const LinksComponent = () => {
  return (
    <div>
      <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
        {Social.map((l) => {
          return (
            <div>
              <a href={l.link}>
                <img style={{width: '25px', objectFit: 'contain'}} src={Images[l.image]} />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LinksComponent