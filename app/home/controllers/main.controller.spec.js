describe('mainController', function(){
  var controller, scope, view;

  beforeEach(module('app'));
  beforeEach(module('templates'));

  beforeEach(inject(function($rootScope, $compile, $templateCache, $controller){
    var html = $templateCache.get('home/main.html');
    scope = $rootScope.$new();
    controller = $controller('mainController', {
        '$scope': scope,
    });
    view = $compile(html)(scope);
  }));

  it('should sum', function(){
    controller.a = 2;
    controller.b = 3;
    view.find('button').triggerHandler('click');
    expect(controller.r).toBe(5);
  });
});
