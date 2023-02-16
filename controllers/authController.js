import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all fields');
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new BadRequestError('User already exists with that email');
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user, token });
};

const login = (req, res) => {
  res.send('login user');
};

const updateUser = (req, res) => {
  res.send('updateUser');
};

export { register, login, updateUser };
