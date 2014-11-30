vs2013-with-grunt-bower
=======================


###This project helps add the use of grunt and bower to a visual studio 2013 project. 


[node.js](http://nodejs.org/) is **required** and needs to be installed.

[rubyonrails](http://rubyonrails.org/) is **required** for [Compass](http://compass-style.org/) and needs to be installed

You do not have to know how to use them.



[Bower](http://bower.io/) adds angularjs &amp; jquery

[Compass](http://compass-style.org/) add Bootstrap for sass




Clone this git locally, then copy the following files to the root of your *Visual Studio 2013* website/project


- .gitignore
- bower.json
- config.rb
- index.html
- gruntfile.js
- package.json



###Install the bootstrap -ruby-gem to your system
do this if you do not have it on your system [bootstrap-sass](https://github.com/twbs/bootstrap-sass)
to check

    > gem list bootstrap-sass

if not installed.

    > gem install bootstrap-sass 

###Install Bootstrap to your project with Compass.

    > compass install bootstrap
    > compass init

###install the node packages.

    > npm install

### install the bower packages.

    > bower install


###run default grunt task - 
copies files to the correct folders.

    > grunt 


    > git init
    > git add --all
    > git commit -m "after install."


###Tasks.

start the server

    > grunt serve 

Watch files and reload web page on edits

watches everything

    > grunt watch
or (speeds up reload times to use one of these)

    > grunt watch:html
    > grunt watch:css
    > grunt watch:js

or use compass to watch and recompile the scss - doesn't reload.

    > compass watch 


