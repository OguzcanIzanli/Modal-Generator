import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";

const uploadImage = async (file: File): Promise<string | null> => {
  if (!file) return null;

  const storageRef = ref(storage, `images/${file.name}-${Date.now()}`);

  try {
    // Upload to firebase
    const url = await uploadBytes(storageRef, file);
    console.log("Image uploaded successful:", url);

    // Get url from firebase
    const downloadURL = await getDownloadURL(url.ref);
    console.log("Download URL:", downloadURL);

    return downloadURL;
  } catch (error) {
    console.error("Firebase upload error:", error);
    return null;
  }
};

export default uploadImage;
