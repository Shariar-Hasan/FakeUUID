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
    // adding digits
    ...(digit ? digits.split("") : []),
    // upper alpha
    ...(upperAlphabets ? alphabetsUpper.split("") : []),
    // lower alpha
    ...(lowerAlphabets ? alphabetsLower.split("") : []),
    // specialchar
    ...specialChars.split(""),
  ]
    // shuffling them
    .sort(() => Math.random() - 0.5);

  let uuid = startsWith;

  while (uuid.length < length + startsWith.length) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    uuid += allowedChars[randomIndex];
  }

  uuid += endsWith;
  return uuid;
};

// Export the function for CommonJS environments
if (typeof module !== "undefined" && module.exports) {
  module.exports = FakeUUID;
}

export default FakeUUID;
