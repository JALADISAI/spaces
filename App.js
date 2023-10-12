import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import "./Navbar.css";
import './App.css';

function App() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggedin, setIsLoggedin] = useState(false);

	const login = (e) => {
		e.preventDefault();
		console.log(name, email, password);
		const userData = {
			name,
			email,
			password,
		};
		localStorage.setItem('token-info', JSON.stringify(userData));
		setIsLoggedin(true);
		setName('');
		setEmail('');
		setPassword('');
	};

	const logout = () => {
		localStorage.removeItem('token-info');
		setIsLoggedin(false);
	};

	return (
		<>
			<div style={{ textAlign: 'center' }}>
				<h1>SIGN IN UP </h1>
				{!isLoggedin ? (
					<>
            <div>
              <Navbar/>
						<form action="">
              <div>
							<input
								type="text"
								onChange={(e) => setName(e.target.value)}
								value={name}
								placeholder="Name"
							/>
              </div>
              <div>
							<input
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								placeholder="Email"
							/>
              </div>
              <div>
							<input
								type="password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								placeholder="Password"
							/>
              </div>
							<button type="submit" onClick={login}>
								GO
							</button>
						</form>

            <div>
              <h3 className='Heading1'>
                GENERATE AWSOME WEBPAGES
              </h3>
              <h4 className='Heading2'>
                THE MOST IMPORTANT PART OF THE STARTUP IS  THE SAMPLES.THE SAMPLES FROM  A SET OF  25 USABLE PAGES YOU CAN USE AS IS OR YOU CAN ADD NEW BLOCKS.
              </h4>
              <button className='Btn'>LearnMore</button>
            </div>
            </div>
					</>
				) : (
					<>
						<h1>User is logged in</h1>
						<button onClickCapture={logout}>logout user</button>
					</>
				)}
			</div>
		</>
	);
}

export default App;
