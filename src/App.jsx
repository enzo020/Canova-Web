import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import WhereFound from './Pages/WhereFound';
import Studies from './Pages/Studies';
import Contacts from './Pages/Contacts';
import AdminLogin from './Pages/admin/AdminLogin';
import ProtectedRoute from './Components/ProtectedRoute';
import AdminDashboard from './Pages/admin/AdminDashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/admin/dashboard"
               element={<ProtectedRoute> <AdminDashboard /></ProtectedRoute> }/>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/onde-encontrar" element={<WhereFound />} />
            <Route path="/estudos" element={<Studies />} />
            <Route path="/contato" element={<Contacts />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;