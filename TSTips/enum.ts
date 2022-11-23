// Enum is an object with index

enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Standard;
console.log(membership);
// console: 1

const membershipReverse = Membership[2];
// console: Premium

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FB",
  INSTAGRAM = "INST",
}
const social = SocialMedia.INSTAGRAM;
console.log(social);
