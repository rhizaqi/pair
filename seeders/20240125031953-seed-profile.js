'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Profiles', [{
    username : 'Andi Kakah',
    password : '123456',
    phone : 654321,
    role : 'owner',
    email : 'andi12@gmail.com',
    createdAt : new Date(),
    updatedAt : new Date(),
    imageURL: 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png'
   },{
    username : 'Rendo kaputra',
    password : '122333',
    phone : 654333,
    role : 'customer',
    email : 'rendo333@gmail.com',
    createdAt : new Date(),
    updatedAt : new Date(),
    imageURL: 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png'
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Profiles', null, {})
  }
};
