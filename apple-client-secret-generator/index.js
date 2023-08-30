const fs = require("fs");
const jwt = require("jsonwebtoken");

const privateKeyPath = "AuthKey_86L288T6FC.p8"; // Replace with the actual path to your P8 file
const keyId = "86L288T6FC"; // Replace with your key ID

const privateKey = fs.readFileSync(privateKeyPath, "utf8");

const currentTime = Math.floor(Date.now() / 1000);
const expirationTime = currentTime + 15777000; // Token is valid for max 2 hours.

const payload = {
  iss: "F5475DUH83", // Team ID
  iat: currentTime,
  exp: expirationTime,
  aud: "https://appleid.apple.com",
  sub: "com.bup.finance", // Registered App ID
};

const signOptions = {
  algorithm: "ES256",
  keyid: keyId,
};

const token = jwt.sign(payload, privateKey, signOptions);

console.log("JWT Token:", token);
