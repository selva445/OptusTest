import React, {useState,useEffect, Fragment} from 'react';
import './ProgressBar.css';
import {data} from '../EndpointData/index'
import {Container,Row,Col} from 'react-bootstrap'
const Range = (props) => {
    return (
        <div className="range" style={{width: `${props.percentRange}%`}}>
            {props.percentRange}
        </div> 
    );
};

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Range percentRange={props.percentRange}/> 
        </div>
    );
};



export const ProgressBarContainer = () => {

    useEffect(() => {
        
        const{buttons,limit,bars} =data

        setButtons(buttons)

        setMaxVal(limit)

        setBars(bars)
        
    }, [])

    const [percentRange1, setProgress1] = useState(0);
    const [percentRange2, setProgress2] = useState(0);
    const [buttons, setButtons] = useState([]);
    const [max, setMaxVal] = useState(100);
    const [bars, setBars] = useState([]);

    console.log(bars)
    return (
        <div className="container">
      
            <ProgressBar percentRange={percentRange1}/>
           
                <div className="toggle-buttons">

                    {buttons.map(eachbutton=>(

                        <Fragment> 
                    
                            {parseInt(eachbutton)>0 ? <button onClick={() => setProgress1(percentRange1+eachbutton < 100 ? percentRange1 + eachbutton : 100)}>{eachbutton}</button> :
                        
                     
                            <button onClick={() => setProgress1(percentRange1+eachbutton > 0 ?
                                percentRange1 + eachbutton : 0)}>{eachbutton}
                            </button>
                       
                       
                            }
                        </Fragment>

                     
                    ))}   
    
                </div> 
 
            
            <ProgressBar percentRange={percentRange2}/>
            
            <div className="toggle-buttons">

                {buttons.map(eachbutton=>(

                    <Fragment> 
                
                        {parseInt(eachbutton)>0 ? <button onClick={() => setProgress2(percentRange2+eachbutton < 100 ? percentRange2 + eachbutton : 100)}>{eachbutton}</button> :
                    
                    
                        <button onClick={() => setProgress2(percentRange2+eachbutton > 0 ?
                            percentRange2 + eachbutton : 0)}>{eachbutton}
                        </button>
                    
                    
                        }
                    </Fragment>

                    
                ))}   

            </div> 

        </div>
    );
};