import crypto from "node:crypto";
import { createWriteStream } from "node:fs";
import { readFile } from "node:fs/promises";

const signedFileContent = await readFile("./loan-agreement-signed.md", "utf-8");

const [fileContent, signature] = signedFileContent.split("✍️ हस्ताक्षर:- ")
const mySecretKey = "my_ultra_pro_max_NASA_Hack_key";


const newSignature = crypto
  .createHash("sha256")
  .update(fileContent + "✍️ हस्ताक्षर:- ")
  .update(mySecretKey)
  .digest("base64url");

if(newSignature === signature){
  console.log("Matched!")
}else{
  console.log("Not Matched!")
}