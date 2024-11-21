import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../loginInfo/config";

const addUserToDatabase = async (userId: string, data: {}) => {
    try {
        await setDoc(doc(db, "users", userId), data);
    } catch(e) {
      alert(e);
    }
}

const getUserFromDatabase = async (userId: string) => {
    try {
        let tempDoc = await getDoc(doc(db, "users", userId));
        return tempDoc.data(); 
    } catch(e) {
        alert(e);
    }
}

export {addUserToDatabase, getUserFromDatabase}  