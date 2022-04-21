'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('creatives', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      uniquelink: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      viewcount: {
        type: Sequelize.BIGINT
      },
      idLink: {
        type: Sequelize.INTEGER,
        references: {
          model: "links",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('creatives');
  }
};