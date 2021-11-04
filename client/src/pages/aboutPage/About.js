import React from 'react';
import './AboutStyle.css';
import imageRimsa from '../../images/team/Rimsa.jpg';
import imageMalik from '../../images/team/Malik.jpg';
import imageSachin from '../../images/team/Sachin.jpg';
import imageNorbu from '../../images/team/Norbu.jpg';
import imageBuddharaj from '../../images/team/Buddharaj.jpg';
import imageSamrat from '../../images/team/Samrat.jpg';

function About() {
    return (
        <div class = "about-page">
            <div class="about-section">
                <h1>About Us Page</h1>
                <div class="about-text">
                    <p>Welcome to Easy Park, your number one solution to your parking problem.</p>
                    <p>We are dedicated to providing you the very best of parking, with an emphasis on ease of parking.</p>
                </div>
            </div>

            <div class="features-box">
                <h2 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}> Features </h2>
                <div class="row">
                    <div class="text-column">
                        <div class="text-Card">
                            <div class="container">
                                <h2>No Stickers</h2>
                                <div class ="text-content">
                                    <p>We bring parking into the 21st century. There is absolutely nothing to issue to residents. Make your 
                                        management office more efficient and eliminate all the work needed to issue and change residents’ parking 
                                        permits. Nothing to issue means never running out of permits again or not being open for a resident to get
                                        a new permit!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-column">
                        <div class="text-Card">
                            <div class="container">
                            <h2>Secure</h2>
                                <div class ="text-content">
                                    <p>Eliminate all the downsides of traditional permits. There is no possibility for residents to trade or 
                                    sell permits any longer with our system. Ensure that when a resident tells you they have removed a vehicle 
                                    from the property that it’s truly gone without worrying about getting the permit back from them.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-column">
                        <div class="text-Card">
                            <div class="container">
                                <h2>Adaptable</h2>
                                <div class ="text-content">
                                    <p>Our virtual permit system can adapt to any parking situation. Our system is completely capable of managing 
                                        resident vehicles, reserved, garage/covered and guest permits all completely paperless with the RULES you 
                                        set!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="text-column">
                        <div class="text-Card">
                            <div class="container">
                                <h2>Less Work</h2>
                                <div class ="text-content">
                                    <p>Save a huge amount of time, with our Virtual Permits you can eliminate 95% of the work associated with 
                                        issuing and maintaining an accurate accounting of all the vehicles on your property.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-column">
                        <div class="text-Card">
                            <div class="container">
                            <h2>Accessible</h2>
                                <div class ="text-content">
                                    <p>Search any of the data to find the vehicles you’re looking for. Quickly locate the owners of a vehicle 
                                        in case of an emergency. You can also access your account data from our mobile app.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-column">
                        <div class="text-Card">
                            <div class="container">
                            <h2>No Downloads</h2>
                                <div class ="text-content">
                                    <p>Residents do not need to download anything to register their vehicles, simply access our website and they 
                                        can make any changes to their vehicles 24/7/365.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}> </h2>    
                <div class="row">
                    <div class="text-column">
                        <div class="text-Card">
                            <div class="container">
                                <h2>Enforcement</h2>
                                <div class ="text-content">
                                    <p>Realtime data can be made available for parking enforcement or security to ensure that everyone is 
                                        following the rules.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-column">
                        <div class="text-Card">
                            <div class="container">
                                <h2>Parking Rules</h2>
                                <div class ="text-content">
                                    <p>Residents electronically sign their parking addendum during the registration process ensuring you 
                                        always have proof they were presented with and acknowledged the rules.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-column">
                        <div class="text-Card">
                            <div class="container">
                                <h2>Your Rules</h2>
                                <div class ="text-content">
                                    <p>Don’t worry, you are completely in control of what limits your want to enforce on your property!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="text-column">
                        <div class="text-Card">
                            <div class="container">
                                <h2>Guest Parking</h2>
                                <div class ="text-content">
                                    <p>Use our guest parking add-on to have an automatic attendant make sure you know who’s visiting your 
                                        property. More details about our guest parking system are listed below.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-column">
                        <div class="text-Card">
                            <div class="container">
                                <h2>Mobile</h2>
                                <div class ="text-content">
                                    <p>Always have access to your data via our mobile app. It’s all easily searchable and nicely organized 
                                        in our mobile app! You can also give access to security and parking enforcement as you see fit!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-column">
                        <div class="text-Card">
                            <div class="container">
                                <h2>History</h2>
                                <div class ="text-content">
                                    <p>Every transaction is logged and easily searchable so that you can be clear about who did what and when.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            
            <div class = "our-team-box">
            <h2 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src={imageSachin} alt="Sachin" class="center"/>
                        <div class="container">
                            <h2>Sachin Karki</h2>
                            <p class="title">Business Analyst</p>
                            <p>sachin@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={imageSamrat} alt="Samrat" class="center"/>
                        <div class="container">
                            <h2>Samrat Bhattarai</h2>
                            <p class="title">Product Tester</p>
                            <p>samrat@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={imageNorbu} alt="Norbu" class="center"/>
                        <div class="container">
                            <h2>Norbu Tsering Lama</h2>
                            <p class="title">Product Director</p>
                            <p>norbu@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src={imageRimsa} alt="Rimsa" class="center"/>
                        <div class="container">
                            <h2>Rimsa Shrestha</h2>
                            <p class="title">Product Manager</p>
                            <p>rimsa@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={imageMalik} alt="Malik" class="center"/>
                        <div class="container">
                            <h2>Malik Bakht</h2>
                            <p class="title">Product Developer</p>
                            <p>malik@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={imageBuddharaj} alt="Buddharaj" class="center"/>
                        <div class="container">
                            <h2>Buddharaj KC</h2>
                            <p class="title">VP Sales</p>
                            <p>buddharaj@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default About;
