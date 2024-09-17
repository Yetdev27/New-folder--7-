import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const Errors = {};

        if (!username) {
            Errors.username = 'Please enter a username.';
        }

        if (!email) {
            Errors.email = 'Please enter an email.';
        }

        if (!password) {
            Errors.password = 'Please enter a password.';
        }

        setErrors(Errors);

        return Object.keys(Errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form
        const isValid = validateForm();

        if (!isValid) {
            return;
        }

        // Handle form submission logic here
        // ...

        // Reset form fields after submission
        setUsername('');
        setEmail('');
        setPassword('');
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit}>
            {errors.username && <p>{errors.username}</p>}
            {errors.email && <p>{errors.email}</p>}
            {errors.password && <p>{errors.password}</p>}
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;
