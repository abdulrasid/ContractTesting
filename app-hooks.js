var hooks = require('hooks');

hooks.beforeAll(function (transactions) {
  hooks.log('before all');
});

hooks.beforeEach(function (transaction) {
  hooks.log(transaction.name + ' started');
});

hooks.beforeEachValidation(function (transaction) {
 // hooks.log(transaction.name + ' result : ' + transaction.result.body);
  hooks.log('before each validation');
});

hooks.afterEach(function (transaction) {
  hooks.log(transaction.name + ' started at : ' + transaction.test.start);
  hooks.log(transaction.name + ' finished at  : ' + transaction.test.end);
});

hooks.afterAll(function (transactions) {
  hooks.log('after all');
})
