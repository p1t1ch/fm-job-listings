import React, { useState } from 'react'
import Seo from '@/components/Seo'
import JobsList from '@/components/JobsList'
import JobCard from '@/components/JobCard'
import Filters from '@/components/Filters'
import jobsData from '../../static/data.json'

// TODO: check rerenders
// TODO: write tests

function IndexPage() {
  const [filters, setFilters] = useState<string[]>([])

  return (
    <div className="min-h-screen">
      <Seo title="Frontend Mentor: Job listings with filtering" />
      <div className="h-39 bg-primary bg-header-mobile md:bg-header-desktop bg-no-repeat bg-cover" />
      <div className="grid place-items-center px-6 md:pb-30">
        <main className={`w-full max-w-container ${filters.length ? 'transform -translate-y-9' : ''}`}>
          <h1 className="sr-only">Choose your job and go to work</h1>
          {filters.length ? (
            <section>
              <h2 className="sr-only">Active filters list</h2>
              <Filters filters={filters} setFilters={setFilters} />
            </section>
          ) : null}
          <section className={`pb-9 pt-14 ${filters.length ? 'md:pt-10' : 'md:pt-19'}`}>
            <h2 className="sr-only">Jobs list</h2>
            <JobsList>
              {jobsData
                .filter(
                  ({ role, level, languages, tools }) =>
                    !filters.length || filters.every(f => [role, level, ...languages, ...tools].includes(f))
                )
                .map(({ id, ...job }) => (
                  <JobCard key={id} {...job} filters={filters} setFilters={setFilters} />
                ))}
            </JobsList>
          </section>
        </main>
      </div>
    </div>
  )
}

export default IndexPage
