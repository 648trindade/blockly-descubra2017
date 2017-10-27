#!/usr/bin/python

# run with python3
# from https://gist.github.com/gourneau/939252 

import os
from PIL import Image
import glob

def sprite(master_width, master_height, n):

    master = Image.new(mode='RGBA', size=(master_width*n, master_height), color=(0,0,0,0))

    images = map(Image.open, ['0.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png'])
    for count, image in enumerate(images):
        master.paste(image,(master_width*count, 0))
    master.save('appengine/maze/pegman.png', 'PNG')


#main
#define image size (width, height)
size = 51, 49
images = map(Image.open, ['avatar1.png', 'avatar2.png', 'avatar3.png'])

for count, im in enumerate(images):
    new_im = im.crop((100, 100, 480, 480))
    new_im = new_im.resize(size, Image.ANTIALIAS)
    #new_im.save(str(count)+".png", "PNG")
    if(count == 0):
        for x in range(0, 16):
    	    new_im.save(str(x) + ".png", "PNG")
        new_im.save("20.png", "PNG")
    elif(count == 1):
        new_im.save("16.png", "PNG")
        new_im.save("17.png", "PNG")
    else:	
        new_im.save("18.png", "PNG")
        new_im.save("19.png", "PNG")

#max weight, max height, number os images
sprite(51, 49, 21)
