(() => {
    'use strict';
    angular.module('app.main').controller('mainController', mainController);

    mainController.$inject = ['$scope', 'checkerService'];
    function mainController($scope: any, checkerService) {
        const vm = this;
        vm.text = '';
        vm.ids = [];
        vm.results = [];

        vm.checkOnline = checkOnline;

        _init();

        function _init(): void {
            $scope.$watch('vm.text', () => { vm.ids = _getIds() });
        }

        function _getIds(): string[] {
            return checkerService.getIds(vm.text);
        }

        function checkOnline() {
            vm.results = [];
            for (let id of vm.ids) {
                checkerService.checkOnline(id).then((res) => {
                    vm.results.push(res.data);
                }, e => console.log('error', e));
            }
        }


    }
})();
