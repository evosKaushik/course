export const checkManagerMiddleware = async (req, res, next) => {
  const { role } = req?.user;
  if (role !== "admin" && role !== "manager")
    return res.status(403).json({ error: "Not Authorized" });

  next();
};
