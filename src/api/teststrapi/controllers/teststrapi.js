'use strict';

/**
 * teststrapi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::teststrapi.teststrapi');
