import React, {Component} from 'react';

const hidden = "hidden.png"
const gridStyleHard = "col-3 col-md-2"
const gridStyleAdvanced = "col-4 col-md-2"
const gridStyleMedium = "col-3 col-md-3"
const gridStyleEasy = "col-4"
const gridStyleArr=[gridStyleEasy,gridStyleMedium,gridStyleAdvanced,gridStyleHard]

const imageStyle = "img-thumbnail image-container"
const imageAnimated = "animated flip delay-0s";

class Image extends Component {
   
    render(){

        const {id, image, handleClick, found, selected, boardSize} = this.props;
        var classNames = selected? imageAnimated : undefined
        var style = found? {opacity: 0.5} : {opacity: 1};
        var gridStyle = gridStyleArr[(boardSize/3)-1];
        console.log(gridStyle)
        //console.log("col-3 col-sm-3 col-md-2 col-lg-2"===gridStyle)
       //console.log(gridStyle)

        return (
            <div className={gridStyle}>
                    <div className={imageStyle}>
                    <img 
                        id={id} 
                        className={classNames}
                        src={(found || selected)? image : hidden} 
                        alt="Loading" 
                        onClick={(event) => handleClick(event.target.id)}
                        style={style}
                    />
                </div>
            </div>
        )
    }
}



export default Image;   

