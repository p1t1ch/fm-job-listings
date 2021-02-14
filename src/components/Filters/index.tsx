import React from 'react'
import { ReactComponent as RemoveIcon } from '@/icons/icon-remove.svg'

interface FiltersProps extends React.HTMLProps<HTMLDivElement> {
  filters: string[]
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
}

function Filters({ filters, setFilters, className = '', ...props }: FiltersProps) {
  return (
    <div className={`flex justify-between bg-white shadow rounded-card py-5 px-6 md:px-10 ${className}`} {...props}>
      <ul className="flex flex-wrap -mb-4 -mr-4">
        {filters.map(filter => (
          <li
            key={filter}
            className="flex items-center h-8 rounded-tag font-bold bg-primary bg-opacity-10 text-primary text-mobile overflow-hidden mr-4 mb-4"
          >
            <div className="px-2">{filter}</div>
            <button
              onClick={() => setFilters(filters.filter(f => f !== filter))}
              className="w-8 h-8 grid place-items-center bg-primary hover:bg-neutral-darkest focus-visible:bg-neutral-darkest transition-colors"
            >
              <RemoveIcon title={`Remove "${filter}" filter`} />
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setFilters([])}
        className="text-neutral-dark font-bold text-mobile leading-8 hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline transition-colors"
      >
        Clear <span className="sr-only">all active filters</span>
      </button>
    </div>
  )
}

export default Filters
