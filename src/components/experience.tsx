import * as React from 'react'
import {
  container
} from './experience.module.css'
import Workplace from './workplace'

const workplaces = [{
  name: "Conseil Général",
  image: "hauteSavoie",
  period: ["May 2014", "July 2014"],
  content: [{
    description: "🌳 Developping an informative portal about waste & energy management in Haute-Savoie, France.",
    success: [
      "University internship. Direct interaction with the client.",
      "**Iterative**, tracer-bullet like developpement cycle.",
      "Had fun making an interactive map with Raphael.js library and QGIS exports."
    ]
  }]
}, {
  name: "Pfeiffer Vacuum",
  image: "pfeiffer",
  period: ["2015", "2016"],
  content: [{
    description: "📝 MS SharePoint integration for internal documentation and process signature workflow, under the german HQ supervision.",
    success: [
      "Big project commissionned by german Pfeiffer Vaccuum headquarters.",
      "Working with an external consulting firm.",
      "Communication practice in reporting to german IT HQ, local management and different actors involved."
    ]
  }]
}, {
  name: "IEM Group",
  image: "iem",
  period: ["2016", "now"],
  content: [{
    description: "📱 Completely redesigning and rewriting flagship mobile application in **React-Native** over legacy APIs.",
    success: [
      "Car parking solution **used in 50+ cities** in 4 different countries, **100k+ downloads**.",
      "**Real-time** on-street parking availability visualization and integration with **Google Maps**"
    ]
  }, {
    description: "⚙️ Developping **scalable APIs** for IEM internal usage (**microservices**) and external partners involved in parking and smart cities.",
    success: [
      "**More than 10 partner companies** served IEM services through APIs",
      "Building strong **Node.JS** experience along with overall **JavaScript** knowledge and **programming practices** (Test-driven and business-driven developpement, DRY, code conventions...)"
    ]
  }, {
    description: "👮 Developpement of a parking enforcement platform.",
    success: [
      "One of the biggest IEM milestones: since 2018, **over 50+ french cities** are handling their own enforcement system (Post-parking package)."
    ]
  }, {
    description: "🛠️ DevOps: Amazon Web Services, Gitlab...",
    success: [
      "High-availability and scalability for **thousands daily connections**",
      "Configuring and using **AWS cloud solutions** like Elastic Beanstalk, Lambda, EC2, S3 and more...",
      "Pipeline configurations for continuous integration and developpement (**CI/CD**) with **Gitlab**"
    ]
  }, {
    description: "🧠 Ideas & conceptual design as a part of IEM's business and technical evolution",
    success: [
      "Being critical about **code & architecture** and providing technical expertise in **R&D and team workshops**."
    ]
  }, {
    description: "⛹️‍♂️ Playing in a growing developpement team",
    success: [
      "**Pair programming** and knowlegde sharing between team members."
    ]
  }, {
    description: "🍻 Surviving Oktoberfest in 2017...",
    success: [
      "Courtesy of IEM Group and all my collegues celebrating in **Munich** that year."
    ]
  }]
}].reverse()

const Experience = () => {
  return (
    <div className={container}>
      {
        workplaces.map(({ name, image, period, content }) => {
          return (
            <Workplace name={name} image={image} period={period} content={content} />
          )
        })
      }
    </div>
  )
}

export default Experience