'use strict';

angular.module('chatterModels', []).
  factory('Messages', [
  	'$meteorCollection', 
  	function($meteorCollection) {
      return $meteorCollection('messages');
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