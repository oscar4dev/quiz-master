import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const dataCollectionRef = collection(db, 'questions')

export async function getData () {
   try {
      const data = await getDocs(dataCollectionRef)
      const filteredData = data.docs.map((doc) => {
         return { ...doc.data(), id: doc.id }
      })
      return filteredData
   } catch (error) {
      throw new Error(error)
   }
}