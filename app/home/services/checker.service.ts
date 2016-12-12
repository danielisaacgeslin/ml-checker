(() => {
    angular.module('app.main').factory('checkerService', checkerService);

    checkerService.$inject = ['$http'];
    function checkerService($http) {
        const prefix: string = 'MLA';
        return {
            checkOnline,
            getIds
        };

        function checkOnline(id: string) {
            return $http.get('https://api.mercadolibre.com/items/' + id);
        }

        function getIds(text: string): string[] {
            let ids: string[] = [];
            const lines: string[] = text.split('\n');
            for (let line of lines) {
                const lineArray = line.split('-');
                const index = 0;
                if (!isNaN(Number(lineArray[index + 1]))) {
                    ids.push(prefix + lineArray[index + 1]);
                }
            }
            return ids;
        }
    }
})();