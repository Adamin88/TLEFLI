import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ReportItemPage from './pages/ReportItemPage'
import MyItemsPage from './pages/MyItemsPage'
import AboutPage from './pages/AboutPage'
import OrganizationPage from './pages/OrganizationPage'
import NotFoundPage from './pages/NotFoundPage'
import UserSignInPage from './pages/UserSignInPage'
import UserSignUpPage from './pages/UserSignUpPage'
import OrganizationSignInPage from './pages/OrganizationSignInPage'
import OrganizationSignUpPage from './pages/OrganizationSignUpPage'
import UserDashboard from './components/UserDashboard'
import OrganizationDashboard from './components/OrganizationDashboard'
import DeclareAnItem from './components/DeclareAnItem'


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user-signin" element={<UserSignInPage />} />
            <Route path="/user-signup" element={<UserSignUpPage />} />
            <Route path="/org-signin" element={<OrganizationSignInPage />} />
            <Route path="/org-signup" element={<OrganizationSignUpPage />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/org-dashboard" element={
                <OrganizationDashboard />
            } />
            <Route path="/report" element={<ReportItemPage />} />
            <Route path="declareitem" element={<DeclareAnItem />}></Route>
            <Route path="/my-items" element={<MyItemsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/organizations" element={<OrganizationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}