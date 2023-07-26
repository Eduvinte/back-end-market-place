import jwt from 'jsonwebtoken';
import secretKey from '../secreteKey/index.js';

async function validatedToken(req, res, next) {
  const authorization = req.header("Authorization");

  if (!authorization) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  const token = authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
}

export default validatedToken;
