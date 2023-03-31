import React from 'react';
import './style/Profile.scss'

const Profile = () => {
    return (
        <div id="profile">
            <header className="profile_h">
                <h1><img src="/img/logo.png" alt="logo" /></h1>
            </header>
            <section className='profile_c'>
                <h2><span>ABOUT ME</span></h2>
                <div className='flex'>
                    <div className="flex">
                        <section className='pic'>
                            <img src="/img/profile.jpg" alt="이미지" />
                        </section>
                    </div>
                </div>
                <div className="information">
                    <section className="text">
                        <p>name: 주세현</p>
                        <p>birth: 1990.07.21</p>
                        <p>education: 구미전자공고</p>
                        <p className='intro'>
                            하루하루 발전하는 개발자 입니다.
                            하루하루 발전하는 개발자 입니다.
                            하루하루 발전하는 개발자 입니다.
                            하루하루 발전하는 개발자 입니다.
                            하루하루 발전하는 개발자 입니다.
                        </p>
                    </section>
                    <h3>My Skills</h3>
                    <div className="skill">
                        <span>html</span>
                        <span>scss</span>
                        <span>Jquery</span>
                        <span>JavaScript</span>
                        <span>react</span>
                        <span>vue</span>
                        <span>TypeScript</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;