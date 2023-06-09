import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { useReducer } from "react";
import { appFirestore, timeStamp } from "../firebase/config";

const initState = {
  document: null,
  isPending: false,
  error: null,
  isSuccess: false,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "isPending":
      return { isPending: true, document: null, isSuccess: false, error: null };
    case "addDoc":
      return { isPending: false, document: action.payload, isSuccess: true, error: null };
    case "error":
      return { isPending: true, document: null, isSuccess: false, error: action.payload };
    default:
      return state;
  }
};

export const useFirestore = (transaction) => {
  const [response, dispatch] = useReducer(storeReducer, initState);

  const colRef = collection(appFirestore, transaction);

  const addDocument = async (doc) => {
    dispatch({ type: "isPending" });
    try {
      const createTime = timeStamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { ...doc, createTime });
      dispatch({ type: "addDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  };

  const deleteDocument = async (id) => {
    try {
      const docRef = await deleteDoc(doc(colRef, id));
      dispatch({ type: "deleteDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  };

  return { addDocument, deleteDocument, response };
};
