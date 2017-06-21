# PART A: HTML + CSS

This project uses Html + Css(Sass).

I choose to use Sass because it helps me by keeping the style sheets concise. It provides variables as a way to store information that I want to reuse throughout my style sheet. Also it don’t repeat similar CSS statements Throughout the project

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
