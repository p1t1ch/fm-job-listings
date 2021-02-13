import React from 'react'

interface JobsListProps extends React.HTMLProps<HTMLOListElement> {
  children: React.ReactNode
}

function JobsList({ children, className = '', ...props }: JobsListProps) {
  return (
    <ul className={`grid gap-10 sm:gap-6 ${className}`} {...props}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}

export default JobsList
