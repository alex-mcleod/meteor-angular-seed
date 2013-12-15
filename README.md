#Meteor-Angular Seed Project

##What 
This is simply an updated amalgamation of other attempts to integrate Angular and Meteor. It is compatible with the latest version of Meteor (v0.6.6.3) and includes the latest version of Angular (v1.2.4). Bootstrap, Angular-ui and Angular-ui-bootstrap are also included.

##Why
Meteor makes transporting data between clients and servers exceptionally simple. Angular makes displaying and exposing that data very easy. Together they make developing realtime, data-driven webapps quick and painless.   

##How
Just clone this repo and run mrt to install the dependencies and start the development server. Head to http://localhost:3000/ to start using the sample app. Read through the source in the app folder to understand how it all works.

##Note
I have forked the meteor_angularjs project (https://github.com/lvbreda/Meteor_angularjs) and the flame-on-ui project (https://github.com/kievechua/flame-on-ui) for use in this project. This allowed me to update both so that they were compatible with the latest versions of angular, meteor and bootstrap. I also made some changes to how the angularjs package works. Notably, that the $meteor factory is now called $meteorCollection (as I feel this more accurately reflects the purpose of that factory), and the new $meteor factory simply returns the global Meteor object so that the entire clientside Meteor API can be used within angular.