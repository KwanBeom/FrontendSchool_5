import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { appFirestore } from "../firebase/config";

export const useCollection = (transaction, myQuery) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let q;
    if (myQuery) {
      q = query(collection(appFirestore, transaction), where(...myQuery), orderBy("createTime", "desc"));
    }

    const unsubscribe = onSnapshot(
      myQuery ? q : collection(appFirestore, transaction),
      (snapshot) => {
        let result = [];

        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(result);
        setError(null);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return { documents, error };
};
