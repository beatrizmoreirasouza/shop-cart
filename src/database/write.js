import fs from "fs";
import path from "path";

export const writeDatabase = (file, data) => {
  fs.writeFileSync(path.resolve(__dirname, file), JSON.stringify(data));
};
