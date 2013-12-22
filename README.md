#Meteor-Angular Seed Project

##What 
This is a simple chat application which is built using a combination of MeteorJS and AngularJS. It can be used as the basis for a completely new project, or just to take a look at how these frameworks can operate together to great effect. Its integration of Meteor and Angular is simply updated amalgamation of other attempts to integrate Angular and Meteor. It is compatible with the latest version of Meteor (v0.7.0.1) and includes the latest version of Angular (v1.2.4). Bootstrap, Angular-ui and Angular-ui-bootstrap are also included.

##Why
Meteor makes transporting data between clients and servers simple. Angular makes displaying and manipulating that data easy. Together they make developing realtime, data-driven webapps quick and painless.   

##How
Just clone this repo and run mrt (https://github.com/oortcloud/meteorite) to install the dependencies and start the development server. Head to http://localhost:3000/ to start using the sample app. Read through the AngularJS (http://angularjs.org/) and MeteorJS (www.meteor.com) docs before taking a look at the source code to understand how it all works. Make sure you try running the project in separate browsers (to simulate two different people using the chat application at once) and see how both clients are updated automatically when one person writes a new message. It's pretty amazing and very easy to setup. 

##Note
I have forked the meteor_angularjs project (https://github.com/lvbreda/Meteor_angularjs) and the flame-on-ui project (https://github.com/kievechua/flame-on-ui) for use in this project. This allowed me to update both so that they were compatible with the latest versions of angular, meteor and bootstrap. I also made some changes to how the angularjs package works. Notably, that the $meteor factory is now called $meteorCollection (as I feel this more accurately reflects the purpose of that factory), and the new $meteor factory simply returns the global Meteor object so that the entire clientside Meteor API can be used within angular.