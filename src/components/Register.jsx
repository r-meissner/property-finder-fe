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
    <div className='p-4'>
      <h1 className='text-center text-2xl font-semibold p-4'>Create a new account</h1>
      <form className='flex flex-col items-center border max-w-fit p-6 mx-auto rounded-2xl' onSubmit={(e) => handleSubmit(e)}>
        <label className='p-4' htmlFor='firstName'>First Name</label>
        <input
        className='input input-bordered p-4'
          type='text'
          name='firstName'
          id='firstName'
          onChange={(e) => handleChange(e)}
          value={accountData.firstName}
        />
        <label className='p-4' htmlFor='lastName'>Last Name</label>
        <input
        className='input input-bordered p-4'
          type='text'
          name='lastName'
          id='lastName'
          onChange={(e) => handleChange(e)}
          value={accountData.lastName}
        />
        <label className='p-4' htmlFor='email'>E-mail</label>
        <input
        className='input input-bordered p-4'
          type='email'
          name='email'
          id='email'
          onChange={(e) => handleChange(e)}
          value={accountData.email}
        />
        <label className='p-4' htmlFor='password'>Password</label>
        <input
        className='input input-bordered p-4'
          type='password'
          name='password'
          id='password'
          onChange={(e) => handleChange(e)}
          value={accountData.password}
        />
        <button className='btn btn-outline p-4 mt-6' type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
