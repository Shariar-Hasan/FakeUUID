const FakeUUID = (options = {}) => {
  const {
    startsWith = "",
    endsWith = "",
    length = 32,
    digit = true,
    lowerAlphabets = true,
    upperAlphabets = false,
    specialChars = "",
  } = options;

  const digits = "0123456789";
  const alphabetsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetsLower = "abcdefghijklmnopqrstuvwxyz";
  const allowedChars = [
    ...(digit ? digits.split("") : []),
    ...(upperAlphabets ? alphabetsUpper.split("") : []),
    ...(lowerAlphabets ? alphabetsLower.split("") : []),
    ...specialChars.split(""),
  ];

  let uuid = startsWith;

  while (uuid.length < length - endsWith.length) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    uuid += allowedChars[randomIndex];
  }

  uuid += endsWith;
  return uuid;
};

// Export the class for CommonJS environments
if (typeof module !== "undefined" && module.exports) {
  module.exports = FakeStore;
}

// Export the class for ES6 environments
if (typeof exports !== "undefined") {
  exports.default = FakeStore;
}
