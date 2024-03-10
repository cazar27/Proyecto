const { response } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const tokenValidation = async (req, res = response, next) => {

  try {
    const authorizationHeader = req.headers.authorization;
    const accessToken =
      authorizationHeader && authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return res
        .status(401)
        .json({ message: "No se ha proporcionado un token de acceso" });
    }

    const decodedToken = jwt.verify(accessToken, process.env.SECRET_JWT_SEED);
    const user = await User.findById(decodedToken.uid);
    if (!user) {
      return res.status(401).json({ message: "Token de acceso no válido" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Ha ocurrido un error al autenticar el token de acceso"
      });
  }
};

module.exports = tokenValidation;
