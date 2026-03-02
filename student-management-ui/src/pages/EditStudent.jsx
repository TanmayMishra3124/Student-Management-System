import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudent, updateStudent } from '../services/api';
import StudentForm from '../components/StudentForm';

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = async () => {
        const response = await getStudent(id);
        setInitialData(response.data);
    };

    const handleSubmit = async (studentData) => {
        await updateStudent(id, studentData);
        navigate('/');
    };

    return (
        <div>
            <h1>Edit Student</h1>
            {initialData && (
                <StudentForm
                    initialData={initialData}
                    onSubmit={handleSubmit}
                    buttonText="Update"
                />
            )}
        </div>
    );
}

export default EditStudent;
