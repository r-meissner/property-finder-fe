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
    <div>
      <h1>Login to your account</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
      <input
          type='email'
          name='email'
          id='email'
          onChange={(e) => handleChange(e)}
          value={account.email}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          onChange={(e) => handleChange(e)}
          value={account.password}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
