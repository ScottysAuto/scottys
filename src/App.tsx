import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AuthProvider } from '../src/components/AuthContext';
import SignIn from '../src/components/SignIn';
import PrivateRoute from '../src/components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
const App = () => (
  <AuthProvider>
				<Navbar />
      <Routes>
				<Route path="/" Component={Home} />
        <Route path="/signin" Component={SignIn} />
        <Route path="/dashboard" element={
								<PrivateRoute>
				<Dashboard/>
				</PrivateRoute>} />
      </Routes>
  </AuthProvider>
);

export default App;
