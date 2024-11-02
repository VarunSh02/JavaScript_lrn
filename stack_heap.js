// stack primitive , heap non-primitive

let myYoutubename = "TechnoMotions"

let anotherName = myYoutubename
anotherName = "VarunSharma"
console.log(anotherName);
console.log(myYoutubename);

let user1 = {
    email: "user@google.com",
    upi: "userhdfcsdwf"
}
let user2 = user1
console.log(user2);
console.table(user2)
user2.email = "varunxx32412"
console.table(user1.email);
console.table(user2.email);

  