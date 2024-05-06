'use strict';

/**
 * teststrapi router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::teststrapi.teststrapi');
