import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [accountData, setAccountData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAccount = {...accountData};
    const sendAccount = async () => {
        try {
            const res = await fetch(import.meta.env.VITE_API_URL+"auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAccount)
            })
            const data = await res.json();
            console.log(data);
            localStorage.setItem('token',JSON.stringify(data.data.token))
        navigate('/')
        } catch (error) {
            console.log("Error posting account: ", error);
        }
    }
    sendAccount();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccountData((prevAccountData) => {
      return {
        ...prevAccountData,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <h1>Create a new account</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          onChange={(e) => handleChange(e)}
          value={accountData.firstName}
        />
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          onChange={(e) => handleChange(e)}
          value={accountData.lastName}
        />
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={(e) => handleChange(e)}
          value={accountData.email}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          onChange={(e) => handleChange(e)}
          value={accountData.password}
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
