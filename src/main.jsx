import React,{Component} from "react";
import "./main.css"
import achki from "./achki.png"
import qora from "./qora.png"
import havoshar from "./content2img1.png"
import kopri from "./content2img2.png"
import tuman from "./content2img3.png"
import dengiz from "./content2img4.png"
import tumkopri from "./content2img5.png"
import sharshara from "./content2img6.png"





class MainCompanent extends Component{
    render(){
        return(
            <main>
                <nav className="main_navbar">
                    <ul>
                        <li>Nature</li>
                        <li>Photography</li>
                        <li>Relaxation</li>
                        <li>Vacation</li>
                        <li>Travel</li>
                        <li>Adventure</li>
                    </ul>
                </nav>
                <div className="main_content1">
                    <h1 data-aos="zoom-in">Featured Posts</h1>
                    <div className="linea"></div>
                    <div className="image" >
                        <div className="mcontent1img1">
                            <div className="animprofil">
                            <h3>The Road Ahead</h3>
                            <p className="road">The road ahead might be paved - it might not be.</p>
                            <div className="profile">
                                <div className="name">
                                    <img src={achki} alt="" />
                                    <p>Mat Vogels</p>
                                </div>
                                <p className="sana">September 25, 2015</p>
                            </div>
                          </div>
                        </div>
                        <div className="mcontent1img2">
                        <div className="animprofil">
                            <h3>From Top Down</h3>
                            <p className="road">Once a year, go someplace you’ve never been before.</p>
                            <div className="profile">
                                <div className="name">
                                    <img src={qora} alt="" />
                                    <p>William Wong</p>
                                </div>
                                <p className="sana">September 25, 2015</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="main_content2">
                    <h1>Most Recent</h1>
                    <div className="linea"></div>
                    <div className="content2m1">
                        <div className="box">
                            <img className="imgg" src={havoshar} alt="" />
                            <div className="txt">
                                <h4>Still Standing Tall</h4>
                                <h5>Life begins at the end of your comfort zone.</h5>
                                <div className="lin"></div>
                                <div className="profile">
                                <div className="name">
                                    <img src={qora} alt="" />
                                    <p>William Wong</p>
                                </div>
                                <p className="sana">9/25/2015</p>
                            </div>
                            </div>
                        </div>
                        <div className="box">
                            <img className="imgg" src={kopri} alt="" />
                            <div className="txt">
                                <h4>Sunny Side Up</h4>
                                <h5>No place is ever as bad as they tell you it’s.</h5>
                                <div className="lin"></div>
                                <div className="profile">
                                <div className="name">
                                    <img src={achki} alt="" />
                                    <p>Mat Vogelsg</p>
                                </div>
                                <p className="sana">9/25/2015</p>
                            </div>
                            </div>
                        </div>
                        <div className="box">
                            <img className="imgg" src={tuman} alt="" />
                            <div className="txt">
                                <h4>Water Falls</h4>
                                <h5>Life begins at the end of your comfort zone.</h5>
                                <div className="lin"></div>
                                <div className="profile">
                                <div className="name">
                                    <img src={achki} alt="" />
                                    <p>Mat Vogelsg</p>
                                </div>
                                <p className="sana">9/25/2015</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="content2m2">
                    <div className="box">
                            <img className="imgg" src={dengiz} alt="" />
                            <div className="txt">
                                <h4>Through the Mist</h4>
                                <h5>Travel makes you see what a tiny place you.</h5>
                                <div className="lin"></div>
                                <div className="profile">
                                <div className="name">
                                    <img src={qora} alt="" />
                                    <p>William Wong</p>
                                </div>
                                <p className="sana">9/25/2015</p>
                            </div>
                            </div>
                        </div>
                        <div className="box">
                            <img className="imgg" src={tumkopri} alt="" />
                            <div className="txt">
                                <h4>Awaken Early</h4>
                                <h5>Not all those who wander are lost.</h5>
                                <div className="lin"></div>
                                <div className="profile">
                                <div className="name">
                                    <img src={achki} alt="" />
                                    <p>Mat Vogelsg</p>
                                </div>
                                <p className="sana">9/25/2015</p>
                            </div>
                            </div>
                        </div>
                        <div className="box">
                            <img className="imgg" src={sharshara} alt="" />
                            <div className="txt">
                                <h4>Try it Always</h4>
                                <h5>The world is a book, and those who do not.</h5>
                                <div className="lin"></div>
                                <div className="profile">
                                <div className="name">
                                    <img src={achki} alt="" />
                                    <p>Mat Vogelsg</p>
                                </div>
                                <p className="sana">9/25/2015</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default MainCompanent;