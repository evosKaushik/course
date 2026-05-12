import axiosInstance from "./axiosInstance";

export const getAllCoursesApi = async () => {
  const { data } = await axiosInstance.get("/courses");
  console.log(data)
  return data;
};
