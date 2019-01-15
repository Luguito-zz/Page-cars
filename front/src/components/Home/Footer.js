import React ,{Component} from 'react';
import '../../css/Footer.css'
import GitHub from '../../images/GitHub-Mark-32px.png';
class Footer extends Component{
render(){
    return(
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    Luguitoo 2019
                    <a href="https://github.com/Luguito" className="right"><img src={GitHub} alt=""/></a>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer;
