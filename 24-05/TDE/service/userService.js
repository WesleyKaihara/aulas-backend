const prisma = require("../db/prisma");
const bcrypt = require('bcrypt');

const getAllUsers = () => {
  return prisma.user.findMany();
}

const getUserByLogin = (login) => {
  return prisma.user.findFirst({
    where: { login }
  })
}

const createUser = ({ login, password }) => {
  const hashedPassword = bcrypt.hashSync(password, 10)

  return prisma.user.create({
    data: {
      login,
      password: hashedPassword
    }
  });
}

const updateUser = (id, { login, password }) => {
  const hashedPassword = bcrypt.hashSync(password, 10)

  return prisma.user.update({
    where: { id },
    data: {
      login,
      password: hashedPassword
    }
  });
};

const deleteUser = (id) => {
  return prisma.user.delete({
    where: { id }
  })
}

module.exports = {
  getAllUsers,
  getUserByLogin,
  createUser,
  updateUser,
  deleteUser,
}