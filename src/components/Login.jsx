import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [account, setAccount] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleSubmit = () => {
        const thisAccount = {...account};
        const checkAccount = async () => {
            const token = localStorage.getItem('token');
            try {
                const res = await fetch(import.meta.env.VITE_API_URL+"auth/login", {
                    method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(thisAccount)
                })
                const data = await res.json();
                console.log(data);
                localStorage.setItem('token',JSON.stringify(data.data.token));
                navigate("/");
            } catch (error) {
                console.log("Error logging in: ", error)
            }
        }
        checkAccount();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAccount((prevAccount) => {
          return {
            ...prevAccount,
            [name]: value,
          };
        });
      };

  return (
    <div className='m-4'>
      <h1 className='text-center text-2xl font-semibold p-4'>Login to your account</h1>
      <form className='flex flex-col items-center border max-w-fit p-6 mx-auto rounded-2xl' onSubmit={(e) => handleSubmit(e)}>
      <label className='p-4' htmlFor='email'>E-mail</label>
      <input
       className='input input-bordered p-4'
          type='email'
          name='email'
          id='email'
          onChange={(e) => handleChange(e)}
          value={account.email}
        />
        <label className='p-4' htmlFor='password'>Password</label>
        <input
         className='input input-bordered p-4'
          type='password'
          name='password'
          id='password'
          onChange={(e) => handleChange(e)}
          value={account.password}
        />
        <button className='btn btn-outline p-4 mt-6' type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
