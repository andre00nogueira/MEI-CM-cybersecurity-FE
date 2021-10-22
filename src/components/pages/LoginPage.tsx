import React, { Component } from 'react';
import '../../assets/styles/pages/login.css'
import { Link } from 'react-router-dom'
import TextInput from '../elements/TextInput';
import { TextInputType } from '../../constants/input';
import ButtonInput from '../elements/ButtonInput';
import { UserLoginRequest } from '../../model/entities/user';
import axios from 'axios';
import { createHash } from 'crypto';
import { BASE_URL } from '../../constants/network';

interface MyProps {
}

interface MyState {
    username: string;
    password: string;
}

type State = MyState
type Props = MyProps

const initState: State = {
    username: '',
    password: '',
}

class LoginPage extends Component<Props, State> {
    state = initState

    onChangeUsername = (newUsername: string) => {
        this.setState({
            username: newUsername
        })
    }

    onChangePassword = (newPassword: string) => {
        this.setState({
            password: newPassword
        })
    }

    onLogin = async () => {
        const {
            username,
            password
        } = this.state

        const hash = createHash('sha256')
        const hashedPassword = hash.update(password).digest('hex')
        const userLoginRequest: UserLoginRequest = {
            username,
            password: hashedPassword
        }

        await axios.post(`${BASE_URL}/authenticate`, userLoginRequest).then(() => {
            console.log('Authenticated.')
        }, () => {
            console.log('Could not authenticate.')
        })
    }

    render() {
        return (
            <div className="login-container">
                <span className="login-title">Login</span>
                <div className="login-container-inputs">
                    <TextInput className="text-input" label="Username" onChange={this.onChangeUsername}/>
                    <TextInput className="text-input" label="Password" type={TextInputType.Password}
                               onChange={this.onChangePassword}/>
                    <ButtonInput className="submit-input" label="Sign In" onClick={this.onLogin}/>
                </div>
                <div className="login-container-other">
                    <span>Don't have an account? {}
                        <Link to="/" style={{ cursor: 'pointer' }}>Click here to register.</Link>
                    </span>
                </div>
            </div>
        );
    }
}

export default LoginPage;