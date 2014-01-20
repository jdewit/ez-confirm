describe('ezConfirmSpec', function() {

  var _ezConfirm, _ezConfirmCtrl, _scope;

  beforeEach(function() {
    module('ez.confirm');

    module(function($provide) {
      $provide.constant('$modal', window.$modal);
    });
  });

  beforeEach(inject(function($rootScope, ezConfirm, $controller) {
    _ezConfirm = ezConfirm;
    _scope = $rootScope.$new();

    _ezConfirmCtrl = $controller('ezConfirmCtrl', {
      $scope: _scope,
      $modalInstance: window.$modalInstance,
      heading: 'dude',
      text: 'wheres my car?'
    });
  }));

  it('should show & hide a dialog and trigger callback', function() {
    var callbackCount = 0;

    _ezConfirm.create('Hey', 'dawg', function() {
      callbackCount++;
    });

    window.$modal.then();

    assert.equal(callbackCount, 1);
    assert.equal(window.$modal.heading, 'Hey');
    assert.equal(window.$modal.text, 'dawg');
  });

  it('should show defaults if callback is first param', function() {
    var callbackCount = 0;

    _ezConfirm.create(function() {
      callbackCount++;
    });

    window.$modal.then();

    assert.equal(callbackCount, 1);
    assert.equal(window.$modal.heading, 'Confirm');
    assert.equal(window.$modal.text, 'Are you sure you want to do this?');
  });

  it('should set text if callback is 2nd param', function() {
    var callbackCount = 0;

    _ezConfirm.create('okok', function() {
      callbackCount++;
    });

    window.$modal.then();

    assert.equal(callbackCount, 1);
    assert.equal(window.$modal.heading, 'Confirm');
    assert.equal(window.$modal.text, 'okok');
  });

  it('should have ok & cancel methods on ctrl', function() {
    _scope.cancel();
    assert.isTrue(window.$modalInstance.dismissed);

    _scope.ok();
    assert.isTrue(window.$modalInstance.closed);

    assert.equal(_scope.heading, 'dude');
    assert.equal(_scope.text, 'wheres my car?');
  });

});
