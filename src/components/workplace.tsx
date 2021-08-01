// Step 1: Import React
import * as React from 'react'
import * as WorkplaceStyles from './workplace.module.css'
import ReactMarkdown from 'react-markdown'
import {Images} from '../images'

interface ContentProps {
  description: string,
  success: string[]
}

interface WorkplaceProps {
  name: string,
  image: string,
  period: string[],
  content: ContentProps[]
}

// Step 2: Define your component
const Workplace = ({ name, image, period, content }: WorkplaceProps) => {
  return (
    <div className={WorkplaceStyles.container}>
      <div className={WorkplaceStyles.header}>
        <div className={WorkplaceStyles.headerLeft}>
          <div className={WorkplaceStyles.companyName}>{name}</div>
          <div className={WorkplaceStyles.period}>{period[0]} - {period[1]}</div>
        </div>
        <div className={WorkplaceStyles.logo}>
          <img src={Images[image]} />
        </div>
      </div>
      {
        content.map((c: ContentProps) => {
          return (
            <div className={WorkplaceStyles.content}>
                <div className={WorkplaceStyles.description}><ReactMarkdown children={c.description} /></div>
                <div className={WorkplaceStyles.success}>
                {
                  c.success.map((s: string) => {
                    return (
                      <div className={WorkplaceStyles.successItem}>{<ReactMarkdown children={"- " + s} />}</div>
                    )
                  })
                }
                </div>
            </div>
            
          )
        })
      }
    </div>
  )
}

// Step 3: Export your component
export default Workplace