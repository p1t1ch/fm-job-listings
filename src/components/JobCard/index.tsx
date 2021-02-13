import React from 'react'

interface JobCardProps extends React.HTMLProps<HTMLDivElement> {
  company: string
  logo: string
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
  logo,
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
    <article className={`relative shadow bg-white ${className}`} {...props}>
      <img
        src={logo}
        alt={`${company} logo`}
        className="absolute top-0 left-6 md:top-1/2 md:left-10 transform -translate-y-1/2 w-12 h-12 md:w-22 md:h-22"
      />
      <div className="relative overflow-hidden rounded-card flex flex-col md:flex-row md:items-center pt-8 pb-6 px-6 md:pb-8 md:pl-38 md:pr-10">
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
          <h2 className="font-bold text-body md:text-lg leading-6 md:leading-6 mb-2">{position}</h2>
          <ul className="flex items-center whitespace-nowrap">
            <li className="job-info">{postedAt}</li>
            <li className="job-info">{contract}</li>
            <li className="job-info">{location}</li>
          </ul>
        </div>
        <ul className="justify-self-end flex flex-wrap pt-4 md:pt-0 -mb-4">
          {[role, level, ...languages, ...tools].map(tag => (
            <li
              key={tag}
              className="flex items-center h-8 px-2 rounded-tag bg-primary bg-opacity-10 hover:bg-opacity-100 font-bold text-primary hover:text-white transition-colors mr-4 mb-4"
            >
              <button>{tag}</button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default JobCard
