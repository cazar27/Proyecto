const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

const updateLastLogging = async (userId) => {
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { lastLogging: new Date() },
      { new: true }
    );
    return user;
  } catch (error) {
    console.error("Error updating lastLogging:", error);
    throw error;
  }
};

const login = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const dbUser = await User.findOne({ email });
    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario con el que intenta acceder no existe"
      });
    } else {
      const validPassword = await bcrypt.compare(password, dbUser.password);

      if (!validPassword) {
        return res.status(400).json({
          ok: false,
          msg: "Contraseña incorrecta"
        });
      }
    }

    // generate JWT
    const token = await generateJWT(dbUser.id, dbUser.username, dbUser.email);
    // Update lastLogging
    await updateLastLogging(dbUser.id);
    
    // valid response
    return res.json({
      ok: true,
      uid: dbUser.id,
      username: dbUser.username,
      email: dbUser.email,
      token,
      msg: "Login usuario: " + dbUser.username
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
      errr_msg: error
    });
  }
};

module.exports = {
  login
};
