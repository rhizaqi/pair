const bcrypt = require('bcryptjs')

// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("B4c0/\/", salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("123asd", salt);
var hash2 = bcrypt.hashSync("123asdd", salt);

console.log(hash);

let next = bcrypt.compareSync(hash, hash2 )

console.log(next, `<<`);