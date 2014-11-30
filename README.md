vs2013-with-grunt-bower
=======================

add grunt and bower to a visual studio 2013 project - angularjs &amp; bootstrap



Angular Bootstrap app 
using npm, grunt, bower.


files needed(6)

.gitignore
bower.json
config.rb
gruntfile.js
package.json
readme.md -- this file!


#######################
install bootstrap. -ruby-gem

(https://github.com/twbs/bootstrap-sass)
Install the gem

gem install bootstrap-sass //if not installed already.

If you have an existing Compass project:

add to the top of the file.
# config.rb:
require 'bootstrap-sass'

then:
=>compass install bootstrap
=> compass init

#########################

//install the node packages.
=> npm install


#########################

// install the bower packages.

=> bower install


##########################


// run default grunt task - copies files to the correct wwwroot folders.

=> grunt 

#########################
git init
git add --all
git commit -m "after install."

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

grunt serve //starts the server
grunt watch // sub-tasks [ :js, :css, :html] // use to speed up if only doing single tasks.
compass watch // the grunt watch:css does the same.


//todo copy the angular-min.js with grunt-contrib-copy util rather than min them yourself.