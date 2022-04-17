#!/usr/bin/sh
export LUA_PATH="$PWD/dist/?.lua;$PWD/node_modules/?.lua;$PWD/node_modules/@dalongrong/ts-lua-module-app/dist/?.lua;;"
lua dist/main.lua