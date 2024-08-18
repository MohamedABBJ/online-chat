import crypto from "crypto";
import { jwtVerify, SignJWT } from "jose";

const secretKey = process.env.SESSION_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

const encryptDecrypt = {
  async encrypter(payload: any) {
    return new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(encodedKey);
  },

  async decrypt(session: string | undefined = "") {
    try {
      const { payload } = await jwtVerify(session, encodedKey, {
        algorithms: ["HS256"],
      });
      return payload;
    } catch (error) {
      console.log(error);
    }
  },
};

export default encryptDecrypt;

/* let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
let encrypted = cipher.update(data);
encrypted = Buffer.concat([encrypted, cipher.final()]);
return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") }; */

/* let iv = Buffer.from(data.iv, "hex");
let encryptedText = Buffer.from(data.encryptedData, "hex");
let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
let decrypted = decipher.update(encryptedText);
decrypted = Buffer.concat([decrypted, decipher.final()]);
return decrypted.toString(); */
