import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AddArticles from './pages/Dashboard/AddArticles/AddArticles';
import AddBlogs from './pages/Dashboard/AddBlogs/AddBlogs';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import ViewProfile from './pages/Dashboard/ViewProfile/ViewProfile';
import Home from './pages/Home/Home/Home';
import Navbar from './pages/Shared/Navbar/Navbar';
import AdminRoute from './pages/SignIn/AdminRoute/AdminRoute';
import PrivateRoute from './pages/SignIn/PrivateRoute/PrivateRoute';
import SignIn from './pages/SignIn/SignIn/SignIn';
import SignUp from './pages/SignIn/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="viewProfile" element={<PrivateRoute><ViewProfile /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route exact path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/addBlogs" element={<AddBlogs />} />
              <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path="/dashboard/addArticles" element={<AdminRoute><AddArticles /></AdminRoute>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
