import React, {useState} from "react";

import './message.css'
import IconMessage from '../../Assets/images/messageicon.webp'

console.log(IconMessage)
const Message = () => {

    const [show,setShow] = useState(false)

    return(
        
        <div>

            <div className="btn-message">
                <img src={IconMessage} onClick={()=>setShow(!show)}></img>
            </div>

            {
                show?<div className="message-inbox">
                        <div className="message-head">
                            <h3> Messages </h3>
                        </div>
                        <div className="message-cards">
                            <p>yow</p>
                        </div>
                    </div>:null

            }

        </div>

    );
}

export default Message