import { useNavigate } from 'react-router-dom';
import { createStudent } from '../services/api';
import StudentForm from '../components/StudentForm';

function AddStudent() {
    const navigate = useNavigate();

    const handleSubmit = async (studentData) => {
        await createStudent(studentData);
        navigate('/');
    };

    return (
        <div>
            <h1>Add Student</h1>
            <StudentForm onSubmit={handleSubmit} buttonText="Save" />
        </div>
    );
}

export default AddStudent;
