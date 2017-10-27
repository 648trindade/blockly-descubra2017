import time
import cv2

camera_port = 0
camera = cv2.VideoCapture(camera_port)

while True:
    ret, img=camera.read()
    cv2.imshow('Video', img)
    k=cv2.waitKey(10)& 0xff
    if k==27:
        time.sleep(0.1)  
        return_value, image = camera.read()
        cv2.imwrite("avatar1.png", image)
        break

while True:
    ret, img=camera.read()
    cv2.imshow('Video', img)
    k=cv2.waitKey(10)& 0xff
    if k==27:
        time.sleep(0.1)  
        return_value, image = camera.read()
        cv2.imwrite("avatar2.png", image)
        break

while True:
    ret, img=camera.read()
    cv2.imshow('Video', img)
    k=cv2.waitKey(10)& 0xff
    if k==27:
        time.sleep(0.1)  
        return_value, image = camera.read()
        cv2.imwrite("avatar3.png", image)
        break

del(camera)
