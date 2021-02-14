import React, { useState } from 'react'
import JobsList from '@/components/JobsList'
import JobCard from '@/components/JobCard'
import Filters from '@/components/Filters'

export interface Job {
  id: number
  company: string
  logo: string
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
  isNew: boolean
  isFeatured: boolean
}

interface JobsProps extends React.HTMLProps<HTMLDivElement> {
  jobs: Job[]
}

function Jobs({ jobs, className = '', ...props }: JobsProps) {
  const [filters, setFilters] = useState<string[]>([])

  return (
    <div className={`${filters.length ? 'transform -translate-y-9' : ''} ${className}`} {...props}>
      {filters.length ? (
        <section aria-labelledby="filters-heading">
          <h2 id="filters-heading" className="sr-only">
            Active filters list
          </h2>
          <Filters filters={filters} setFilters={setFilters} />
        </section>
      ) : null}
      <section aria-labelledby="list-heading" className={`pb-9 pt-14 ${filters.length ? 'md:pt-10' : 'md:pt-19'}`}>
        <h2 id="list-heading" className="sr-only">
          Jobs list
        </h2>
        <JobsList>
          {jobs
            .filter(
              ({ role, level, languages, tools }) =>
                !filters.length || filters.every(f => [role, level, ...languages, ...tools].includes(f))
            )
            .map(({ id, ...job }) => (
              <JobCard key={id} job={job} filters={filters} setFilters={setFilters} />
            ))}
        </JobsList>
      </section>
    </div>
  )
}

export default Jobs
