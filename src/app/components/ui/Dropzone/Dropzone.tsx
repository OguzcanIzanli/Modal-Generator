import React, { useEffect, useState, useCallback } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { useModal } from "@/app/context/ModalContext";
import IconImage from "../icons/IconImage";
import IconUpload from "../icons/IconUpload";
import styles from "./Dropzone.module.scss";
import Image from "next/image";
import uploadImage from "../../../firebase/uploadImage";

interface UploadedFile extends FileWithPath {
  preview: string;
}

interface DropzoneProps {
  dropzone: string;
}

const Dropzone: React.FC<DropzoneProps> = ({ dropzone }) => {
  const { setModal } = useModal();
  const [uploadedImg, setUploadedImg] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const onDrop = useCallback(
    async (acceptedFiles: FileWithPath[]) => {
      // Preview image
      const filesWithPreview = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      ) as UploadedFile[];

      setUploadedImg(filesWithPreview);

      if (filesWithPreview.length > 0) {
        setIsUploading(true);
        const file = acceptedFiles[0];
        const downloadURL = await uploadImage(file);

        if (downloadURL) {
          setModal((prevModal) => ({
            ...prevModal,
            logoUrl: downloadURL,
          }));
        }

        setIsUploading(false);
      }
    },
    [setModal]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: {
    //   "image/jpeg": [".jpeg", ".jpg"],
    //   "image/png": [".png"],
    //   "image/gif": [".gif"],
    // },
    maxSize: 2 * 1024 * 1024, // 2MB
  });

  useEffect(() => {
    if (uploadedImg.length > 0) {
      const latestFile = uploadedImg[0];

      dropzone === "logo"
        ? setModal((prevModal) => ({
            ...prevModal,
            logoUrl: latestFile.preview,
          }))
        : "";
    }

    // Cleaning up generated URLs to prevent memory leaks
    return () => {
      uploadedImg.forEach((file) => URL.revokeObjectURL(file.preview));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadedImg, setModal]);

  return (
    <div {...getRootProps()} className={styles.uploadImgContainer}>
      <input {...getInputProps()} />
      {uploadedImg.length > 0 ? (
        <Image
          src={uploadedImg[0].preview}
          alt="Uploaded Image"
          width={80}
          height={0}
          style={{ objectFit: "contain" }}
          className={styles.uploadedImg}
        />
      ) : (
        <IconImage className={styles.iconImage} />
      )}

      <div className={styles.uploadImg}>
        <IconUpload /> Drop your image here or
        <span style={{ fontWeight: 700 }}>upload</span>
      </div>

      {isUploading && <p className={styles.status}>Uploaded...</p>}
      {!isUploading && uploadedImg.length > 0 && (
        <p className={styles.status}>Uploaded successful!</p>
      )}
    </div>
  );
};

export default Dropzone;
