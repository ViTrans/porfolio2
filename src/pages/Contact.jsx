import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
const Contact = () => {
  const [messages, setMessages] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const getMessages = async () => {
      const data = await getDocs(collection(db, "contacts"));
      setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMessages();
  }, []);
  console.log(messages);
  if (!user) {
    return null;
  }
  return (
    <div>
      <h3 className="text-3xl font-semibold">Contact</h3>
      <div className="mt-10">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id}>
                <td className="border px-4 py-2">{message.name}</td>
                <td className="border px-4 py-2">{message.email}</td>
                <td className="border px-4 py-2">{message.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
