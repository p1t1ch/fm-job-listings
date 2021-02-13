import React from 'react'
import Seo from '@/components/Seo'
import JobsList from '@/components/JobsList'
import JobCard from '@/components/JobCard'
import jobsData from '../../static/data.json'

function IndexPage() {
  return (
    <div className="min-h-screen grid place-items-center">
      <Seo title="Frontend Mentor: Job listings with filtering" />
      <div className="w-full h-39 bg-primary bg-header-mobile sm:bg-header-desktop bg-no-repeat bg-cover" />
      <main className="w-full max-w-container px-6 pt-14 pb-9 sm:pt-19 sm:pb-30">
        <JobsList>
          {jobsData.map(job => (
            <JobCard
              key={job.id}
              company={job.company}
              position={job.position}
              role={job.role}
              level={job.level}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              languages={job.languages}
              tools={job.tools}
              isNew={job.new}
              isFeatured={job.featured}
            />
          ))}
        </JobsList>
      </main>
    </div>
  )
}

export default IndexPage
