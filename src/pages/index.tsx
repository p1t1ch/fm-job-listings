import React from 'react'
import Seo from '@/components/Seo'
import JobsList from '@/components/JobsList'
import JobCard from '@/components/JobCard'
import jobsData from '../../static/data.json'

function IndexPage() {
  return (
    <div className="min-h-screen">
      <Seo title="Frontend Mentor: Job listings with filtering" />
      <div className="h-39 bg-primary bg-header-mobile sm:bg-header-desktop bg-no-repeat bg-cover" />
      <div className="grid place-items-center px-6 pt-14 pb-9 sm:pt-19 sm:pb-30">
        <main className="w-full max-w-container">
          <JobsList>
            {jobsData.map(({ id, ...job }) => (
              <JobCard key={id} {...job} />
            ))}
          </JobsList>
        </main>
      </div>
    </div>
  )
}

export default IndexPage
