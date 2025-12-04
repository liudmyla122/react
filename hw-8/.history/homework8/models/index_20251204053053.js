
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { sequelize } from "../config/db.js";
import Sequelize from "sequelize";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = {};

fs.readdirSync(__dirname)
  .filter(file => file !== "index.js" && file.endsWith(".js"))
  .forEach(file => {
    const modelImport = await import(path.join(__dirname, file));

    const model = modelImport.default(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });



db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
