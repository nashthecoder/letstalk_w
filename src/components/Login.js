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
                        <form>
                            <input className='text__field' type='text' placeholder='Email'/>
                            <input className='pass__field' type='password' placeholder='Password'/>
                        </form>
                            <button className='submit__btn' type='submit'>Login</button>
                            <button className='submit__btn' type='submit'>Sign Up</button>
                    </div>
                    </div>
                </section>
        </div>
    )
}

export default Login