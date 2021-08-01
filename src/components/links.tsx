import * as React from 'react'

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
  image: 'twitter',
  link: 'mailto:hi@iva.dev'
}]

const LinksComponent = () => {
  return (
    <div>
      <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {Social.map((l) => {
          return (
            <div>
              <a href={l.link}>{l.title}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LinksComponent