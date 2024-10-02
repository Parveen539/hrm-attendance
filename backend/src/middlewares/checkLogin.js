import jwt from "jsonwebtoken"
//middleware to authenticate user login
const checkLogin = (req, res,next) => {
//recieving auth token from header and verifying it
  const authHeader = req.header("authorization");
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) {
    res.status(401).send({ error: "Missmatch Token" });
  }
  try {
    const data = jwt.verify(token,process.env.ACCESS_TOKEN);
    req.user = data.user;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
export {checkLogin};