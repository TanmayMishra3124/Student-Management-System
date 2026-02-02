import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentList from './pages/StudentList';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import './index.css';

function App() {
    return (
        <Router>
            <div className="container">
                <nav style={{ marginBottom: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <Link to="/" className="btn btn-primary">Home</Link>
                    <Link to="/add" className="btn btn-primary">Add Student</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<StudentList />} />
                    <Route path="/add" element={<AddStudent />} />
                    <Route path="/edit/:id" element={<EditStudent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
