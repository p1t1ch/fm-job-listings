import React from 'react'
import { Job } from '@/components/Jobs'

interface JobCardProps extends React.HTMLProps<HTMLDivElement> {
  job: Omit<Job, 'id'>
  filters: string[]
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
}

function JobCard({ job, filters, setFilters, className = '', ...props }: JobCardProps) {
  const {
    company,
    logo,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    isNew,
    isFeatured,
  } = job

  return (
    <article className={`relative shadow bg-white ${className}`} {...props}>
      <img
        src={logo}
        alt={`${company} logo`}
        className="absolute top-0 left-6 md:top-1/2 md:left-10 transform -translate-y-1/2 w-12 h-12 md:w-22 md:h-22"
      />
      <div className="relative overflow-hidden rounded-card flex flex-col md:flex-row md:items-center pt-8 pb-6 px-5 md:pb-8 md:pl-38 md:pr-10">
        {isFeatured && <div className="absolute top-0 bottom-0 left-0 w-featured bg-primary" />}
        <div className="flex-grow pb-4 md:pb-0 md:mr-10 border-b border-neutral-light md:border-none">
          <div className="flex items-center mb-2">
            <div className="font-bold text-mobile md:text-sm text-primary mr-4">{company}</div>
            {(isNew || isFeatured) && (
              <div className="flex">
                {isNew && <div className="badge bg-primary">New!</div>}
                {isFeatured && <div className="badge bg-neutral-darkest">Featured</div>}
              </div>
            )}
          </div>
          <h3>
            <a
              href="/"
              className="inline-block font-bold text-body hover:text-primary focus-visible:text-primary transition-colors md:text-lg leading-6 md:leading-6 mb-2"
            >
              {position}
            </a>
          </h3>
          <ul className="flex items-center whitespace-nowrap">
            <li className="job-info">{postedAt}</li>
            <li className="job-info">{contract}</li>
            <li className="job-info">{location}</li>
          </ul>
        </div>
        <ul className="justify-self-end flex flex-wrap pt-4 md:pt-0 -mb-4 -mr-4">
          {[role, level, ...languages, ...tools].map(tag => {
            const isTagInFilters = filters.includes(tag)
            return (
              <li key={tag} className="mr-4 mb-4">
                <button
                  onClick={() => setFilters(isTagInFilters ? filters.filter(f => f !== tag) : [...filters, tag])}
                  className={`flex items-center h-8 px-2 rounded-tag font-bold text-mobile bg-primary ${
                    isTagInFilters ? 'text-white' : 'bg-opacity-10 text-primary'
                  } hover:bg-opacity-100 hover:text-white focus-visible:shadow-badge transition-colors`}
                >
                  {tag}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}

export default JobCard
