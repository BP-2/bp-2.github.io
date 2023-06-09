import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "./firebase_setup/firebase.js"
 
const handleSubmit = (message, name, email) => {
    const ref = collection(firestore, "connections_data") // Firebase creates this automatically
 
    let data = {
        userName: name,
        userMail: email,
        userMessage: message,
    }
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit