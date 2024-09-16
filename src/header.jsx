import React,{Component} from "react";
import "./header.css"


class HedCompanent extends Component{


    render(){
        return(
            <header className="hed">
                <nav className="navbar">
                    <div className="navbar_left">
                        <h1>Escape.</h1>
                    </div>
                    <div className="navbar_right">
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
                <div className="hed_contetnt">
                    <h1>Let's do it together.</h1>
                    <p>We travel the world in search of stories. Come along for the ride.</p>
                    <button>View Latest Posts   </button>
                </div>
            </header>
        )
    }

}

export default HedCompanent;