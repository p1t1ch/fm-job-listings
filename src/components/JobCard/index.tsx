import React from 'react'

interface JobCardProps extends React.HTMLProps<HTMLDivElement> {
  company: string
  // Logo: SvgrComponent
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools?: string[]
  isNew?: boolean
  isFeatured?: boolean
}

function JobCard({
  company,
  // Logo,
  isNew = false,
  isFeatured = false,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools = [],
  className = '',
  ...props
}: JobCardProps) {
  return (
    <article
      className={`relative flex items-center pt-8 pb-6 px-6 sm:pb-8 sm:px-10 bg-white shadow rounded-card overflow-hidden ${className}`}
      {...props}
    >
      {isFeatured && <div className="absolute top-0 bottom-0 left-0 w-featured bg-primary" />}
      {/* <Logo className="absolute sm:static w-12 h-12 sm:w-22 sm:h-22 mr-6" title={`${company} logo`} /> */}
      <div className="flex-grow mr-6">
        <div className="flex items-center mb-2">
          <div className="font-bold text-sm text-primary mr-4">{company}</div>
          {(isNew || isFeatured) && (
            <div className="flex">
              {isNew && <div className="badge bg-primary">New!</div>}
              {isFeatured && <div className="badge bg-neutral-darkest">Featured</div>}
            </div>
          )}
        </div>
        <h2 className="font-bold text-lg leading-6 mb-2">{position}</h2>
        <ul className="flex items-center">
          <li className="job-info">{postedAt}</li>
          <li className="job-info">{contract}</li>
          <li className="job-info">{location}</li>
        </ul>
      </div>
      <ul className="flex justify-self-end">
        {[role, level, ...languages, ...tools].map(tag => (
          <li
            key={tag}
            className="flex items-center h-8 px-2 rounded-tag bg-primary bg-opacity-10 hover:bg-opacity-100 text-primary hover:text-white transition-colors mr-4 mb-4"
          >
            <button>{tag}</button>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default JobCard
