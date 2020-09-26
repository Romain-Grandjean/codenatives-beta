import React from 'react';
import Login from './Login';
import Register from './Register';

class LoginRegister extends Component {
	state = {  }
	render() { 
		return (  
			<Login><h1>Login</h1></Login>
			<Register><h1>Register</h1></Register>

		);
	}
}
 
export default LoginRegister;

