import React, { useState } from 'react';
import './Style.css';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [instaId, setInstaId] = useState(""); 
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const collectData = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!name || !email || !instaId) { // Updated validation to include phone
            setError("All fields are required.");
            return;
        }
        
        setError(""); // Clear previous errors
        const data = {
            name: name.trim(),
            email: email.trim(),
            instaId: instaId.trim()
          };
        console.log("Sending data:", data);
        

 // Updated data to include phone
        
        try {
            let response = await fetch('https://formdata-backendmain.onrender.com/details', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            
            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(result));
                setSuccess("Form submitted successfully!");
                // Clear input fields
                setName("");
                setEmail("");
                setInstaId(""); // Clear phone field
            } else {
                setError(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setError("Network error. Please try again later.");
        }
    };

    return (
        <div className='background'>
        <h1 className="highlight-heading">Unite as Hindus</h1>
        <h1><b>SAI-AL-HIND</b></h1>
    
        <div className='container'>
            <form onSubmit={collectData}>
                <h1 className='text-center pt-3'>Let's move towards the Hindurashtra</h1>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <div className='ipboxes'>
                    <label className='form-label'>Name</label>
                    <input type='text' className='form-control' placeholder='Enter your name'
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='ipboxes'>
                    <label className='form-label'>Email address</label>
                    <input type='email' className='form-control' placeholder='Enter mail id' 
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='ipboxes'>
                    <label className='form-label'>Instagram Id</label>
                    <input type='tel' className='form-control' placeholder='Enter Insta Id' 
                        value={instaId} onChange={(e) => setInstaId(e.target.value)} />
                        

                </div>
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    
        <h1 className="highlight-heading">JAI HINDUSTAN</h1>
    </div>
    
    );
}

export default Form;