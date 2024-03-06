const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const createUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario con ese email ya existe"
      });
    }
    const dbUser = new User(req.body);
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password, salt);

    await dbUser.save();
    return res.status(201).json({
      ok: true,
      user: dbUser,
      msg: "Registrado usuario: " + dbUser.name
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

const updateUser = async (req, res = response) => {
  const { username, name, surnames, email, age, active } = req.body;
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: "Usuario no encontrado"
      });
    }

    const existingUser = await User.findOne({ email: email, _id: { $ne: id } });

    if (existingUser) {
      return res.status(400).json({
        ok: false,
        msg: "El nuevo correo electrónico ya está en uso por otro usuario"
      });
    }

    user.username = username;
    user.name = name;
    user.surnames = surnames;
    user.age = age;
    user.active = active;

    await user.updateOne({
      _id: id,
      name: name,
      username: username,
      surnames: surnames,
      age: age,
      active: active
    });

    const newUser = await user.save();

    return res.status(201).json({
      ok: true,
      user: newUser,
      msg: "Actualizado usuario: " + newUser.name
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
      errr_msg: error
    });
  }
};

const getUsers = async (req, res = response) => {
  try {
    const users = await User.find();
    return res.status(201).json({
      ok: true,
      users: users,
      msg: "Listado de usuarios"
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

const getUsersCount = async (req, res = response) => {
  let count = 0;
  try {
    count = await User.count();
    return res.status(201).json({
      ok: true,
      count: count,
      msg: "Total de usuarios: " + count
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

const getUserByUsername = async (req, res = response) => {
  const { username } = req.params;
  try {
    const dbUser = await User.findOne({ username });
    if (dbUser) {
      return res.status(201).json({
        ok: true,
        user: dbUser,
        msg: "Encontrado usuario con nombre: " + dbUser.username
      });
    } else {
      return res.status(400).json({
        ok: false,
        msg: "El usuario con nombre: " + username + " no ha sido encontrado"
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
      errr_msg: error
    });
  }
};

const getUserById = async (req, res = response) => {
  const { id } = req.params;
  try {
    const dbUser = await User.findOne({ _id: id });
    if (dbUser) {
      return res.status(201).json({
        ok: true,
        user: dbUser,
        msg: "Encontrado usuario con id: " + dbUser.id
      });
    } else {
      return res.status(400).json({
        ok: false,
        msg: "El usuario con id: " + id + " no ha sido encontrado"
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
      errr_msg: error
    });
  }
};

const updatePassword = async (req, res = response) => {
  const { id } = req.params;
  const { oldPassword, password } = req.body;
  console.log(oldPassword, password);
  try {
    const dbUser = await User.findOne({ _id: id });

    if (!dbUser) {
      return res.status(404).json({
        ok: false,
        msg: "Usuario no encontrado"
      });
    }
    const validPassword = await bcrypt.compare(oldPassword, dbUser.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Contraseña actual incorrecta"
      });
    }

    const salt = bcrypt.genSaltSync();
    const newHashedPassword = bcrypt.hashSync(password, salt);

    dbUser.password = newHashedPassword;
    await dbUser.save();

    return res.status(201).json({
      ok: true,
      msg: "Contraseña actualizada correctamente"
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

const deleteUser = async (req, res = response) => {
  const { id } = req.params;

  try {
    const dbUser = await User.findOne({ _id: id });

    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario con id: " + id + " no ha sido encontrado"
      });
    }

    await dbUser.deleteOne();

    return res.status(201).json({
      ok: true,
      user: dbUser,
      msg: "Usuario con id: " + dbUser.id + " fue eliminado"
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
      err_msg: error
    });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUsersCount,
  getUserByUsername,
  getUserById,
  updateUser,
  updatePassword,
  deleteUser
};
