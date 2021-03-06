const User = require("../models/Users");
const bcrypt = require("bcryptjs");

module.exports = {
  async store(req, res) {
    const { password } = req.body;

    try {
      const user = await User.findOne({
        where: {
          profile,
        },
      });

      if (!user || !bcrypt.compareSync(password, user.password))
        return res.status(403).send({ error: "Usuário e/ou senha inválidos" });

      setTimeout(() => {
        res.status(201).send({
          User: {
            userId: user.profile,
          },
          token,
        });
      }, 3000);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
