import React, {useState} from 'react'

const Newsletter = () => {
    const [submission, setSubmission] = useState(''); 
    const [ email, setEmail] = useState(''); 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setSubmission(email);
        setEmail('');
        
    }

    const handleChange = (e) => {
        e.preventDefault(); 
        setEmail(e.target.value);
    }
    return (
        <div>
            <h1> Newletter Subscriptions</h1>
            <h2>Sign up and get 20% off for your first purchase!</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
            <form className='contact-form'>
                <input
                type='email'
                className='form-input'
                placeholder='enter email'
                value = {email}
                onChange = {handleChange}
                />
                <button type='submit' className='submit-btn' onSubmit = {handleSubmit}>
                subscribe
                </button>
            </form>
        </div>
    )
}

export default Newsletter
