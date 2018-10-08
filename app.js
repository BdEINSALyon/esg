
angular.module('app',['LocalStorageModule']).controller('Main', function($scope, localStorageService){
    $scope.fields = [
        {name: 'first_name', label: 'Prénom', example:'Guy'},
        {name: 'last_name', label: 'Nom', example:'Dumoulin'},
        {name: 'role_bde', label: 'Rôle BdE', example:'Responsable Bal INSA Lyon'},
        {name: 'role', label: 'Rôle (Etudiant, Doctorant ...)', example:'Élève ingénieur INSA Lyon - 3ème année Génie FIMI'},
        {name: 'phone', label: 'Téléphone', example:'+33 (0)6XXXXXXXX'}
    ];
    $scope.data = localStorageService.get('data') || {};
    localStorageService.set('data', $scope.data);
    localStorageService.bind($scope, 'data');

    $scope.as_html = function () {
        return document.getElementById('sign').innerHTML;
    }
}).config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('esg');
    localStorageServiceProvider
        .setStorageType('sessionStorage');
});
