import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
  const { nombre, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) return res.status(400).json({ message: "El usuario ya existe" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ nombre, email, password: hashedPassword });
  await user.save();

  res.status(201).json({ message: "Usuario registrado correctamente" });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Credenciales incorrectas" });
  }
};
