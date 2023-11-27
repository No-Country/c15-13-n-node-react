const jwt = require("jsonwebtoken");
require("dotenv").config();

//Verificamos si el token existe o es valido

const verifyToken = async (req, res, next) => {
  try {
    //Objeto headers con la propiedad "x-access-token"
    const token =
      req.headers["x-access-token"] ||
      req.query.access_token ||
      req.headers["authorization"] ||
      req.cookies.access_token;
    //Verificamos si el token es asignado
    if (!token) {
      return res.status(403).json({ message: "Token erroneo..." });
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    }

    if (token) {
      //Verificamos si el usuario existe y el token es valido
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id, { password: 0 });
      req.userId = decoded.id;
      if (!user) return res.status(404).json({ message: "Usuario no encontrado..." });
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: "No autorizado...", error });
  }
};

module.exports = {
  verifyToken,
};
