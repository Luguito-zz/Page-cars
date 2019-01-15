import React, {Component} from 'react';
import '../../css/pallarax.css'

class Header extends Component{
    render(){
        return( 
            <div className="Home">     
               <div className="container">
                    <div className="center-align">
                        <h1>Welcome</h1>
                        <p>This Web was builded with React, GraphQL and Materialize</p>
                    </div>
               </div>
            </div>
        )
    }
}

export default Header;