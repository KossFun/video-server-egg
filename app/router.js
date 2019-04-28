'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/ok', controller.okcms.index);
  router.get('/ok1', controller.okcms.video);

};
