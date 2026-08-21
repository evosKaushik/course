import { axiosWithCreds } from "./axiosInstances";

export const initializeFileUpload = async (parentDirId, filename, filesize) => {
  const { data } = await axiosWithCreds.post(
    `/file/${parentDirId || ""}`,
    {},
    {
      headers: {
        filename,
        filesize: filesize.toString(),
      },
    }
  );
  return data;
};

export const finalizeFileUpload = async (fileId) => {
  const { data } = await axiosWithCreds.post(`/file/${fileId}/uploaded`);
  return data;
};

export const deleteFile = async (id) => {
  const { data } = await axiosWithCreds.delete(`/file/${id}`);
  return data;
};

export const renameFile = async (id, newFilename) => {
  const { data } = await axiosWithCreds.patch(`/file/${id}`, {
    newFilename,
  });
  return data;
};
