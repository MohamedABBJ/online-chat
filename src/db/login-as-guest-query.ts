import encrypter from "@/utils/encrypter";
import IDGenerator from "@/utils/id-generator";
import crypto from "crypto";

function loginAsGuestQuery() {
  const guestID = `Guest_${IDGenerator()}`;
  const guestSessionID = encrypter.encrypter(IDGenerator());
  const guestSessionIDDC = encrypter.decrypt(guestSessionID);

  return console.log(guestSessionIDDC);
}
export default loginAsGuestQuery;
