import { db } from "@/app/config/firebase";
import { addDoc, collection, doc } from "firebase/firestore";
import { DeviceForm } from "@/app/lib";

const addDevice = async (data: DeviceForm) => {
    try {
        const docRef = collection(db, "devices");
        // TODO : refactor update methods to login and store as cookie
        const userId = "GaulZMf7Jpi8KwK2TOej";

        const userRef = doc(db,"devices", userId);

       const status =  await addDoc(docRef, {
            valveBox: data.valve_box,
            wafer: data.wafer,
            dome: data.dome,
            content: data.content,
            codeSeal: data.codeSeal,
            date: new Date(),
            user: userRef
        })
        console.log("Document written with ID: ", status);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export { addDevice };