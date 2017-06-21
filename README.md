# PART B: Javascript

This project uses Html + Css(Sass) + Angular.

I choose to use AngularJs because the frameowrk can can help architect the code so that it is modular (therefore reusable), dry, readable, performant and secure. jQuery or VanillaJs is not a framework, so it doesn't help in these regards. It's data-binding let putting  {{data bindings}} whenever there are dynamic data. Angular provides $scope handler, which helped me populate data-bindings  through call to the web server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

1) Install Ruby

```
sudo apt-get install ruby
```

2) Install SASS

```
sudo su -c "gem install sass"
```

3) Install Gulp

```
npm install -g gulp-cli
```

### Installing

A step by step series of examples that tell you have to get a development env running

First run "npm install" to install the node packages

```
npm install
```


## Generating the dev environment
Just run "gulp" and the dev environment will be generated

```
gulp
```
To serve the dev environment and start working

```
gulp serve
```

## Generating the production environment

```
gulp build --env production
```
