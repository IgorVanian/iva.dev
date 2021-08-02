import * as React from 'react'
import Experience from '../components/experience'
import Layout from '../components/layout'

const EmployersPage = () => {
  return (
    <Layout pageTitle="👨‍💻 Mes aventures de développeur">
      <div>
        <p>Here's my previous work experience as an employee.</p>
        <Experience />
      </div>
    </Layout>
  )
}

export default EmployersPage