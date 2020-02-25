var hooks = require('hooks');

const replaceWithBadAccountId =  function (transaction) {
  //dredd skips non 2xx by default
  transaction.skip = false;
  //case where accountid is invalid.
  transaction.fullPath = transaction.fullPath.replace('ac001', 'xxxxx');
}

const deleteUserIdHeader =  function (transaction) {
  //dredd skips non 2xx by default
  transaction.skip = false;

  //case where userid doesn't exist in the header.
  delete transaction.request.headers['userid'];
}

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
});

hooks.before('account > /contract/api/v1/account/{accountId} > get ccount details by account Id > 400 > application/json; charset=utf-8', replaceWithBadAccountId);
hooks.before('account > /contract/api/v1/account/{accountId} > update an account by account Id > 400 > application/json; charset=utf-8', replaceWithBadAccountId);
hooks.before('account > /contract/api/v1/account/{accountId} > deletes an account > 400 > application/json; charset=utf-8', replaceWithBadAccountId);

hooks.before('account > /contract/api/v1/account/{accountId} > get ccount details by account Id > 401 > application/json; charset=utf-8', deleteUserIdHeader);
