const jwt = require('jsonwebtoken');
const { userService } = require('../services/userServices');

const { JWT_SECRET } = process.env; 
const MSG_ERROR = 'ERRO INTERNO';

const userController = {

  createLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
      }
      const result = await userService.createLogin({ email, password });
      if (!result) {
        return res.status(400).json({ message: 'Invalid fields' });
      }
      const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
      const token = jwt.sign({ data: result }, JWT_SECRET, jwtConfig);
      res.status(200).json({ token });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: MSG_ERROR });
    }
  },
};

module.exports = {
  userController,
};
