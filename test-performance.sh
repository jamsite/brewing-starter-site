#!/usr/bin/env bash
set -ex
autocannon -c 100 -d 40 -p 10 http://127.0.0.1:3000/hello-world.html
