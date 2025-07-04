import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SubmitUseCasePage from './pages/SubmitUseCasePage'
import RemoveTediumPage from './pages/RemoveTediumPage'
import DriveInnovationPage from './pages/DriveInnovationPage'
import WorkSmarterPage from './pages/WorkSmarterPage'
import FAQPage from './pages/FAQPage'
import ProjectsSubmittedPage from './pages/ProjectsSubmittedPage'
import DepartmentDashboard from './components/DepartmentDashboard'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submit-use-case" element={<SubmitUseCasePage />} />
          <Route path="/remove-tedium" element={<RemoveTediumPage />} />
          <Route path="/drive-innovation" element={<DriveInnovationPage />} />
          <Route path="/work-smarter" element={<WorkSmarterPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/projects-submitted" element={<ProjectsSubmittedPage />} />
          <Route path="/dashboard" element={<DepartmentDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App