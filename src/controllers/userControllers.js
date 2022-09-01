const jwt = require('jsonwebtoken');
const { userService } = require('../services/userServices');

const JWT_SECRET = 'minhasenhadificil'; 

const userController = {

  createLogin: async (req, res) => {
    // try {
      const { email, password } = req.body;
      
      const result = await userService.createLogin({ email });
       if (!result || result.password !== password) {
         return res.status(400).json({ message: 'Invalid fields' });
       }

      const token = jwt.sign({ userId: 1 }, JWT_SECRET, { expiresId: 500 });
      res.status(200).json({ token });
    // } catch (error) {
      // return res.status(500).json({ message: 'Erro interno', error: error.message });
    // }
  },
};

module.exports = {
  userController,
};
