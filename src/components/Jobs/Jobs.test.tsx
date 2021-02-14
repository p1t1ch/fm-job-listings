import React from 'react'
import { render, screen, getAllByRole } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Jobs from '.'

const jobsData = [
  {
    id: 1,
    company: 'Photosnap',
    logo: 'images/photosnap.svg',
    isNew: true,
    isFeatured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 2,
    company: 'Manage',
    logo: 'images/manage.svg',
    isNew: true,
    isFeatured: true,
    position: 'Fullstack Developer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    languages: ['Python'],
    tools: ['React'],
  },
  {
    id: 3,
    company: 'Account',
    logo: 'images/account.svg',
    isNew: true,
    isFeatured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2d ago',
    contract: 'Part Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
]

test('Click on tag button filters the list', () => {
  render(<Jobs jobs={jobsData} />)

  const jobsSection = screen.getByLabelText(/jobs list/i)
  expect(getAllByRole(jobsSection, 'list')[0].children).toHaveLength(jobsData.length)

  const tag = 'Frontend'
  const tagButton = screen.getAllByRole('button', { name: tag })[0]
  userEvent.click(tagButton)
  const filteredJobsData = jobsData.filter(({ role, level, languages, tools }) =>
    [role, level, ...languages, ...tools].includes(tag)
  )
  expect(getAllByRole(jobsSection, 'list')[0].children).toHaveLength(filteredJobsData.length)

  userEvent.click(tagButton)
  expect(getAllByRole(jobsSection, 'list')[0].children).toHaveLength(jobsData.length)
})

test('Click on tag button activates the filter panel', () => {
  render(<Jobs jobs={jobsData} />)

  expect(screen.queryByLabelText(/filters list/i)).not.toBeInTheDocument()

  const tag = 'Frontend'
  const tagButton = screen.getAllByRole('button', { name: tag })[0]
  userEvent.click(tagButton)
  expect(screen.getByLabelText(/filters list/i)).toBeInTheDocument()

  userEvent.click(tagButton)
  expect(screen.queryByLabelText(/filters list/i)).not.toBeInTheDocument()
})

test('Multiple filters apply multiple conditions to the list simultaneously', () => {
  render(<Jobs jobs={jobsData} />)

  const firstTag = 'Frontend'
  const firstTagButton = screen.getAllByRole('button', { name: firstTag })[0]
  userEvent.click(firstTagButton)

  const secondTag = 'React'
  const secondTagButton = screen.getAllByRole('button', { name: secondTag })[0]
  userEvent.click(secondTagButton)

  const filteredJobsData = jobsData.filter(({ role, level, languages, tools }) => {
    const tags = [role, level, ...languages, ...tools]
    return tags.includes(firstTag) && tags.includes(secondTag)
  })
  expect(getAllByRole(screen.getByLabelText(/jobs list/i), 'list')[0].children).toHaveLength(filteredJobsData.length)
})

test('Filters can be removed from the filters panel', () => {
  render(<Jobs jobs={jobsData} />)

  const tag = 'Frontend'
  const tagButton = screen.getAllByRole('button', { name: tag })[0]
  userEvent.click(tagButton)

  userEvent.click(screen.getByTitle(new RegExp(`remove "${tag}" filter`, 'i')).parentNode as HTMLElement)
  expect(getAllByRole(screen.getByLabelText(/jobs list/i), 'list')[0].children).toHaveLength(jobsData.length)
  expect(screen.queryByLabelText(/filters list/i)).not.toBeInTheDocument()
})

test('Clear button clears all applied filters', () => {
  render(<Jobs jobs={jobsData} />)

  const firstTag = 'Frontend'
  const firstTagButton = screen.getAllByRole('button', { name: firstTag })[0]
  userEvent.click(firstTagButton)

  const secondTag = 'React'
  const secondTagButton = screen.getAllByRole('button', { name: secondTag })[0]
  userEvent.click(secondTagButton)

  userEvent.click(screen.getByRole('button', { name: /clear/i }))
  expect(getAllByRole(screen.getByLabelText(/jobs list/i), 'list')[0].children).toHaveLength(jobsData.length)
  expect(screen.queryByLabelText(/filters list/i)).not.toBeInTheDocument()
})
