import crypto from "node:crypto";
import { createWriteStream } from "node:fs";
import { readFile } from "node:fs/promises";

const fileContent = await readFile("./loan-agreement.md");

const mySecretKey = "my_ultra_pro_max_NASA_Hack_key";

const hash = crypto
  .createHash("sha256")
  .update(fileContent)
  .update(mySecretKey)
  .digest("base64url");

const writeStream = createWriteStream("./loan-agreement-signed.md");

writeStream.write(fileContent);
writeStream.write(hash);

writeStream.end();


//originalData + secretData