#!/bin/bash

python cam.py 

cp avatar1.png participantes/1/$(date +"%T").png
cp avatar2.png participantes/2/$(date +"%T").png
cp avatar3.png participantes/3/$(date +"%T").png

python3 spritegenerator.py 

google-chrome --incognito appengine/maze.html
