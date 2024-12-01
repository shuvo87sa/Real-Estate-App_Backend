import { useState } from 'react'
import './chat.scss'

function Chat(){
    const [chat,setChat] = useState(true)
    return (
        <div className='chat'>
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://photosvibe.in/wp-content/uploads/cute-girl-pic11.jpg" alt="" />
                    <span>Sabbir hossen</span>
                    <p>
                        hello,......
                    </p>
                </div>
                <div className="message">
                    <img src="https://www.unesco.org/sites/default/files/styles/paragraph_medium_desktop/public/2022-04/godwin-angeline-benjo-An7LvVMb6rY-unsplash.jpeg?itok=3STf8JD9" alt="" />
                    <span>Sabbir hossen</span>
                    <p>
                        hi,are you there?
                    </p>
                </div>
                <div className="message">
                    <img src="https://i.pinimg.com/736x/86/3a/1a/863a1a6a0a8d0b29c909f2e5181f3e94.jpg" alt="" />
                    <span>Sabbir hossen</span>
                    <p>
                        hello,......
                    </p>
                </div>
                <div className="message">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMHCDMtqM_45FAek0yHA1bNk79rzvO1C1Pg&s" alt="" />
                    <span>Sabbir hossen</span>
                    <p>
                        hello,......
                    </p>
                </div>
                <div className="message">
                    <img src="https://static.toiimg.com/thumb/83890830/83890830.jpg?height=746&width=420&resizemode=76&imgsize=115510" alt="" />
                    <span>Sabbir hossen</span>
                    <p>
                        hello,......
                    </p>
                </div>
                
            </div>
           {chat && (
             <div className="chatBox">
             <div className="top">
                 <div className="user">
                     <img 
                     src="https://photosvibe.in/wp-content/uploads/cute-girl-pic11.jpg" 
                     alt="" 
                     />
                     Sabbir hossen
                 </div>
                 <span className='close' onClick={()=>setChat((null))}>X</span>
             </div>
             <div className="center">
                 <div className="chatMessage">
                     <p>hey ,are you there?</p>
                     <span>8 hour age</span>
                 </div>
                 <div className="chatMessage">
                     <p>hi...</p>
                     <span>7 hour age</span>
                 </div>
                 <div className="chatMessage own">
                     <p>are you there?</p>
                     <span>7 hour age</span>
                 </div>
                 <div className="chatMessage">
                     <p>....</p>
                     <span>6 hour age</span>
                 </div>
                 <div className="chatMessage own">
                     <p>????</p>
                     <span>5 hour age</span>
                 </div>
                 <div className="chatMessage">
                     <p>hey ,are you there?</p>
                     <span>5 hour age</span>
                 </div>
                 <div className="chatMessage own">
                     <p>hey ,are you there?</p>
                     <span>5 hour age</span>
                 </div>
                 <div className="chatMessage">
                     <p>....?</p>
                     <span>3 hour age</span>
                 </div>
                 <div className="chatMessage own">
                     <p>hey ,are you there?</p>
                     <span>2 hour age</span>
                 </div>
                 <div className="chatMessage">
                     <p>i....</p>
                     <span>1 hour age</span>
                 </div>
                 <div className="chatMessage own">
                     <p>Excuse me?</p>
                     <span>1 hour age</span>
                 </div>
             </div>
             <div className="bottom">
                 <textarea></textarea>
                 <button>Send</button>
             </div>
         </div>
           )}
        </div>
    )
}

export default Chat