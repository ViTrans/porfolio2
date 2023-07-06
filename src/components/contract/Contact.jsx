import { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
    })
      .then(() => {
        alert("Message has been submitted");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="container">
      <h3 className="heading mb-9 md:mb-14 relative pb-4 font-bold text-xl md:text-[32px] text-primary leading-normal text-left left">
        Liên hệ với mình
      </h3>
      <form
        className="bg-[#0A192F]  shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 text-white">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Họ và tên
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your content"
            className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
          />
        </div>
        <div className="mb-4 text-white">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your content"
            className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
          />
        </div>
        <div className="mb-6 text-white">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="message"
          >
            Tin nhắn
          </label>
          <textarea
            id="content"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none resize-none min-h-[150px]"
            placeholder="Enter description"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-primary  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Gửi
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
