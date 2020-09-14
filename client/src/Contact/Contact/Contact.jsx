import React, {useState} from "react"

export default function Contact() {
    const [contactInfo, updateInfo] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    return(
        <>
        <form>
           <input type="text" placeholder="Name" name="name"></input>
           <input type="text" placeholder="Email" name="email"></input>
           <input type="text" placeholder="Subject" name="subject"></input>
           <textarea type="text" placeholder="Write Your Message Here..." name="message"></textarea>
        </form>
        </>
    )
}