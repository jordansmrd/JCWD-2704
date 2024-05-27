/** @format */
import multer, { FileFilterCallback } from "multer";
import { join } from "path";
import { type Request } from "express";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;
const maxSize = 1048576;

const multerConfig: multer.Options = {
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
  ) => {
    if (file.mimetype.split("/")[0] != "image") {
      return cb(new Error("file type is not image"));
    }

    const fileSize = parseInt(req.headers["content-length"] || "");

    if (fileSize > maxSize) {
      return cb(new Error("max size 1mb"));
    }
    return cb(null, true);
  },
  limits: {
    fileSize: maxSize, //1mb
  },
};

export const uploader = (prefix: string, folderName?: string) => {
  const default_dir = join(__dirname, "../public/images/");
  const storage = multer.diskStorage({
    destination: (
      req: Request,
      file: Express.Multer.File,
      cb: DestinationCallback
    ) => {
      const destination = folderName ? default_dir + folderName : default_dir;
      cb(null, destination);
    },
    filename: (
      req: Request,
      file: Express.Multer.File,
      cb: FileNameCallback
    ) => {
      console.log(file.originalname);

      const originalNameParts = file.originalname.split(".");
      const fileExtension = originalNameParts[originalNameParts.length - 1];
      const newFileName = prefix + Date.now() + "." + fileExtension;

      cb(null, newFileName);
    },
  });

  return multer({
    storage,
    ...multerConfig,
  });
};

export const blobUploader = () =>
  multer({
    ...multerConfig,
  });
