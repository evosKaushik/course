export default async function checkAdmin(req, res, next) {
  const { role } = req.user;
console.log(role)
  if (role !== "admin") {
    return res.status(403).json({ error: "Not Authorized" });
  }

  next();
}
