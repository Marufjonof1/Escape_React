import React,{Component} from "react";
import "./footer.css"

class FooterCompanent extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="content">
                    <h1>Stay in Touch</h1>
                    <div className="linea"></div>
                    <div className="inp">
                        <input type="text" placeholder="Enter your email address" />
                        <button>Submit</button>
                    </div>
                </div>
                <nav className="fnavbar">
                    <div className="fnavbar_left">
                        <h1>Escape.</h1>
                    </div>
                    <div className="fnavbar_right">
                        <ul>
                            <li>
                                <button>Home</button>
                            </li>
                            <li>
                                <button>Categories</button>
                            </li>
                            <li>
                                <button>About</button>
                            </li>
                            <li>
                                <button>Contact</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </footer>
        )
    }
}

export default FooterCompanent;