import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import storage from "../firebase/firebaseConfig";
import { useAuth } from "../contexts/authContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [link, setLink] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const { user } = useAuth();
  if (!user) {
    return (
      <h2 className="text-2xl font-medium text-center mt-10">
        Please login to add products
      </h2>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image to Firebase Storage
    const storageRef = ref(storage, `products/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercent =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progressPercent);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Nothing at all");
        }
      },
      (error) => {
        console.log(error);
        setImage("");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );

    // Add product to Firestore
    try {
      const docRef = await addDoc(collection(db, "products"), {
        title,
        description,
        image,
        link,
        createdAt: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle("");
      setDescription("");
      setImage("");
      setLink("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-medium">Add Products</h3>
      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Tên sản phẩm
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nhập tên sản phẩm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 font-semibold mb-2"
          >
            Hình ảnh
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2"
          >
            Mô tả
          </label>
          <textarea
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg outline-none resize-none min-h-[150px]"
            placeholder="Enter description"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="link"
            className="block text-gray-700 font-semibold mb-2"
          >
            Link sản phẩm
          </label>
          <input
            type="text"
            onChange={(e) => setLink(e.target.value)}
            id="link"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nhập link sản phẩm"
            required
          />
        </div>

        {image && (
          <div className="mb-4">
            <progress value={uploadProgress} max="100" />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
