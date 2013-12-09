'use strict';

angular.module('reviseModels', []).
  factory('Courses', [
  	'$meteorCollection', 
  	function($meteorCollection) {
      return $meteorCollection('courses');
  }]).
  factory('Accounts', [
  	'$meteorCollection', 
  	'$meteor', 
  	function($meteorCollection, $meteor) {
      var Accounts = {};
      Accounts.users = $meteor.users;
      Accounts.userId = $meteor.UserId;
      Accounts.user 
      Accounts.loginWithPassword = $meteor.loginWithPassword;
      Accounts.logout = $meteor.logout;
      Accounts.loginWithExternalServise = $meteor.loginWithExternalServise;
      return Accounts;
  }]);