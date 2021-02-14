import React from 'react'
import Seo from '@/components/Seo'
import Jobs from '@/components/Jobs'
import jobsData from '../../static/data.json'

function IndexPage() {
  return (
    <div className="min-h-screen">
      <Seo title="Frontend Mentor: Job listings with filtering" />
      <div className="h-39 bg-primary bg-header-mobile md:bg-header-desktop bg-no-repeat bg-cover" />
      <div className="grid place-items-center px-6 md:pb-30">
        <main className="w-full max-w-container">
          <h1 className="sr-only">Choose your job and go to work</h1>
          <Jobs jobs={jobsData} />
        </main>
      </div>
    </div>
  )
}

export default IndexPage
