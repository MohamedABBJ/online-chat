import { customAlphabet } from "nanoid";

function IDGenerator() {
  const nanoid = customAlphabet("1234567890abcdefghijklmnqpizx", 6);
  return nanoid();
}
export default IDGenerator;
