import { useState, useEffect } from 'react';

function StudentForm({ initialData, onSubmit, buttonText }) {
    const [formData, setFormData] = useState({ name: '', email: '', course: '' });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Course</label>
                <input name="course" value={formData.course} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">{buttonText}</button>
        </form>
    );
}

export default StudentForm;
