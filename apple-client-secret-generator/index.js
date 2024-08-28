const fs = require("fs");
const jwt = require("jsonwebtoken");

const privateKeyPath = "your_auth_key.p8"; // Replace with the actual path to your P8 file
const keyId = "your auth key id"; // Replace with your key ID

const privateKey = fs.readFileSync(privateKeyPath, "utf8");

const currentTime = Math.floor(Date.now() / 1000);
const expirationTime = currentTime + 15777000; // Token is valid for max 2 hours.

const payload = {
  iss: "apple team id", // Team ID
  iat: currentTime,
  exp: expirationTime,
  aud: "https://appleid.apple.com",
  sub: "com.bup.finance", // Registered App bundle ID
};

const signOptions = {
  algorithm: "ES256",
  keyid: keyId,
};

const token = jwt.sign(payload, privateKey, signOptions);

console.log("JWT Token:", token);
