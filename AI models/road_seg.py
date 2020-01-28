import cv2
import numpy as np

path = 'C:\\Users\\Edwin\\PycharmProjects\\MLforSIH\\images\\'

img = cv2.imread(path+'image3.png')
img1 = cv2.imread(path+'image1.png')
gray = cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY)

hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
lower = np.array([0, 0, 0])
higher = np.array([0, 0, 255])
mask = cv2.inRange(hsv, lower, higher)
mask_inv = cv2.bitwise_not(mask)
mask_inv = np.stack((mask_inv,)*3, axis=-1)

res = cv2.bitwise_and(img1, img1, mask)

add = cv2.addWeighted(img1, 0.5, mask_inv, 0.5, 0)

table = np.concatenate((img1, add), axis=1)

cv2.namedWindow("Images", cv2.WINDOW_NORMAL)
cv2.imshow("Images", table)
cv2.resizeWindow("Images", 1400, 500)
cv2.imwrite("segroad.png", table)
cv2.waitKey(0)
cv2.destroyAllWindows()

