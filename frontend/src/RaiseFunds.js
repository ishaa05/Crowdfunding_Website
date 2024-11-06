import React, { useState } from 'react';
import axios from 'axios';
import { ChevronLeft } from 'lucide-react';
import './RaiseFunds.css'; // Assume you have a CSS file for styling
import { useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const RaiseFunds = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        cause: '',
        description: '',
        image: '', // Store the image URL
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            const file = e.target.files[0];
            if (file) {
                handleImageUpload(file); // Handle image upload
            }
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleImageUpload = async (file) => {
        const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dylm4tisu/image/upload`; // Replace <your_cloud_name> with your Cloudinary cloud name
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'fundbridge'); // Replace <your_upload_preset> with your Cloudinary upload preset

        try {
            const response = await axios.post(cloudinaryUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            
            await setFormData(prevData => {return { ...prevData, image: response.data.secure_url };}); // Set the image URL
            //await axios.post('http://localhost:5000/images/api/upload', {
           //     "imageurl":response.data.secure_url
            //}
             // );     
            
        } catch (error) {
            console.error('Error uploading image:', error);
            setError('Image upload failed. Please try again.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.name || !formData.email || !formData.cause) {
            setError('Please fill in all required fields.');
            return;
        }

        const data = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            cause: formData.cause,
            description: formData.description,
            image: formData.image, // Use the uploaded image URL
        };

        try {
            const response = await axios.post('http://localhost:5000/campaigns/api', data);
            navigate('/campaign-details', { state: { campaignId: response.data._id } });
        } catch (error) {
            console.error('Error posting campaign:', error);
            setError(error.response?.data?.message || 'An error occurred while posting the campaign.');
        }
    };

    return (
        <div className="outer-container">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">FundBridge.com</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto"> {/* Changed from ml-auto to ms-auto for Bootstrap 5 */}
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faqs">FAQs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/campaigns">Campaigns</a>
                        </li>
                    </ul>
                </div>
                <div className="login">
                    <header>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </header>
                </div>
            </nav>
            <div className="create-event-card">
                {error && <div className="error-message">{error}</div>}
                <form className="event-form" onSubmit={handleSubmit}>
                    <section>
                        <h2 className='h2-heading'>Campaign Details</h2>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone *</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cause">Cause *</label>
                            <input
                                type="text"
                                id="cause"
                                name="cause"
                                value={formData.cause}
                                onChange={handleChange}
                                placeholder="Enter the cause"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description *</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Describe your campaign and its importance."
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleChange}
                            />
                        </div>
                    </section>
                    <div className="form-actions">
                        <button type="submit" disabled={!formData.image}>Post Campaign</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RaiseFunds;
