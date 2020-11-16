import React from 'react';
import './Login.css';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useHistory } from 'react-router-dom';

function Login() {
    return (
        <div className ='flex__container'>
            <section className="flex__item__left">
                <div className="left__div">
                    <p className="left__text"><i className="search__icon"><SearchIcon /> </i>Find a health service.</p>
                    <p className="left__text">
                        <i className="friends__icon"><ChatBubbleOutlineOutlinedIcon /> </i>Ask me...</p>
                    <p className="left__text"><i className="comment__icon"><SupervisorAccountIcon /></i>Share with your friends</p>
                    </div>
            </section>
            <section className="flex__item__right">
            <div className="right__grid">
                    <div className="right__div">
                    <img className='login_logo' src='../images/lets_talk_logo.png' alt=""/>
                    <div className="ui card login-card">
                        <div className="content">
                            <form className="ui form">
                                <div className="two fields">
                                    <div className="field">
                                    <label>
                                        First Name
                                        <input type="text" name="firstName" placeholder="First Name"/>
                                    </label>
                                    </div>
                                    <div className="field">
                                    <label>
                                        Last Name
                                        <input type="text" name="lastName" placeholder="Last Name" />
                                    </label>
                                    </div>
                                </div>
                                    <div className="field">
                                    <label>
                                        Email
                                        <input type="email" name="email" placeholder="Email" />
                                    </label>
                                    </div>
                                    <div className="field">
                                    <label>
                                        Password
                                        <input type="password" name="password" placeholder="Password" />
                                    </label>
                                    </div>
                                <button className="ui primary button login" type="submit">
                                Sign Up
                                </button>
                                <button className="ui primary button login" type="submit">
                                Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
            </section>
        </div>
    )
}

export default Login
