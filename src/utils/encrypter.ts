import crypto from "crypto";

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encryptDecrypt = {
  encrypter(data: string) {
    let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
  },

  decrypt(data: { iv: string; encryptedData: string }) {
    let iv = Buffer.from(data.iv, "hex");
    let encryptedText = Buffer.from(data.encryptedData, "hex");
    let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  },
};

export default encryptDecrypt;
