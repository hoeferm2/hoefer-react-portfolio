import React, { useState } from 'react'
import "../styles/ContactForm.css"



export default function ContactForm() {
    const [name, setName] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [message, setMessage] = useState(" ")
  return (
    <div>
    <div className='formGroup'>
        <form>
            <div>
                <label htmlFor='name'>Your name
                    <input type="text" id="name" name="name" value={name}
                    onChange= {e => setName(e.target.value)}/>
                </label>
                
            </div>
        </form>
    </div>
     <div className='formGroup'>
     <form>
         <div>
             <label htmlFor='email'>Enter email
                 <input type="text" id="email" name="email" value={email}
                 onChange= {e => setEmail(e.target.value)}/>
             </label>
             
         </div>
     </form>
 </div>
 <div className='formGroup'>
     <form>
         <div>
             <label htmlFor='message'>Message
                 <input type="text" id="message" name="message" value={message}
                 onChange= {e => setMessage(e.target.value)}/>
             </label>
             
         </div>
         <button type='submit'>Send</button>
     </form>
 </div>
 </div>
  )
}
