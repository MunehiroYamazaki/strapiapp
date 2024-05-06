'use strict';

/**
 * teststrapi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::teststrapi.teststrapi');
