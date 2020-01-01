
import React, {Component} from 'react';


class Board extends Component {


    render(){
        const {images} = this.props
        
        return (
          <div>
           <div className="container-fluid">  
              <div className="text-center">
               <img src="logo.png" alt="loading" className="image"/>
               </div>
                  <div className="row w-20">
                     {images}
                   </div>
           </div>
          </div>
        )
      }

}

export default Board