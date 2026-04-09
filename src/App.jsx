import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ConfirmationPage from './ConfirmationPage'
import ContributionPage from './ContributionPage'
import MainPage from './mainPage'
import RegionPage from './RegionPage'
import SchoolDetailPage from './SchoolDetailPage'
import StartPage from './StartPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/region/:regionId" element={<RegionPage />} />
        <Route path="/school/:universityId" element={<SchoolDetailPage />} />
        <Route path="/contribute/:universityId" element={<ContributionPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
