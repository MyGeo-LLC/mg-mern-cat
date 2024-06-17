import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.post('/', async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password: await bcrypt.hash(password, 10), role });
  await user.save();
  res.send(user);
});

router.put('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
});

router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send('User deleted');
});

export default router;
