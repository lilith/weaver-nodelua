# Weaver engine framework

2014 Weaver engine prototype - using Node, NodeLua, Lua, and Pluto. 

This branch of the weaver engine framework is based on Node and Lua. The app framework ecosystem around Node.js is a bit richer than Lua's, so we can take advantage of that to let Lua focus on the game scripts themselves. 


## Install

Prereq: NPM, Bower, Grunt, Lua, Pluto, and Busted


heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git



## To improve

Perhaps find a way to package Lua itself into an .npm?

And, perhaps, also Pluto

https://chromium.googlesource.com/external/skia/gyp/+/master/lua.gyp
https://code.google.com/p/gyp/wiki/GypUserDocumentation\


https://github.com/andzdroid/mongo-express


Eventually get  Travis working with Lua unit tests:

http://thejacklawson.com/2012/09/lua-testing-with-busted-and-travis-ci/index.html

And get a combined Node/Lua buildback going


## License

Dual licensed under the MIT and Apache 2 licenses - you pick which one you want to use. Note that all pull requests and contributions must be released under the [Apache Contributor Agreement](http://imageresizing.net/licenses/contribute), which lets us dual-license under both.