import React, {Component} from 'react';



class Option extends Component {


    render(){
        const {optionType, optionsData, selected, onChange} = this.props;
        var res = optionsData.map((name,index) =>
            <div key={name}>
                <input 
                    type="radio"
                    name={optionType}
                    value={name.toLowerCase()}
                    checked={selected === name.toLowerCase()}
                    onChange ={onChange}
                />
                <b className="font">{name}</b>
            </div>
        )

        return (
            <div>
                {optionType==="Animal"?  <img src="type.png" style={{width: "50%"}} alt="none" /> : <img src="level.png" style={{width: "50%"}} alt="none" />}
                {res}   
            </div>
        )
      }



}

export default Option