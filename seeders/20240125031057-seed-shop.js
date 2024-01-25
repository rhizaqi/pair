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
   await queryInterface.bulkInsert('Shops', [{
    name : 'KafiiBY-nga',
    location : 'Ngagel',
    createdAt : new Date(),
    updatedAt : new Date(),
    profileId : 1
   },{
    name : 'KafiiBY-wiy',
    location : 'Wiyung',
    createdAt : new Date(),
    updatedAt : new Date(),
    profileId : 2
   }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Shops', null, {})
  }
};
