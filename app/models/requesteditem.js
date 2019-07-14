"use strict";
module.exports = (sequelize, Sequelize) => {
    var RequestedItems = sequelize.define("requestedItems", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        requestNum: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        item: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.INTEGER
        },
        tax: {
            type: Sequelize.INTEGER
        },
        purchaseType: {
            type: Sequelize.STRING
        },
        period: {
            type: Sequelize.STRING
        },
        vendor: {
            type: Sequelize.STRING
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
    return RequestedItems;
};