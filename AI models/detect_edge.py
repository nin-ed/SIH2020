import cv2
import numpy as np
from imutils import perspective, contours
import imutils
from scipy.spatial import distance as dist

class CropLayer(object):
    def __init__(self, params, blobs):
        self.startX = 0
        self.startY = 0
        self.endX = 0
        self.endY = 0

    def getMemoryShapes(self, inputs):
        (inputShape, targetShape) = (inputs[0], inputs[1])
        (batchSize, numChannels) = (inputShape[0], inputShape[1])
        (H, W) = (targetShape[2], targetShape[3])
        self.startX = int((inputShape[3] - targetShape[3]) / 2)
        self.startY = int((inputShape[2] - targetShape[2]) / 2)
        self.endX = self.startX + W
        self.endY = self.startY + H
        return [[batchSize, numChannels, H, W]]

    def forward(self, inputs):
        return [inputs[0][:, :, self.startY:self.endY,
                self.startX:self.endX]]


def midpoint(ptA, ptB):
    return (ptA[0] + ptB[0]) * 0.5, (ptA[1] + ptB[1]) * 0.5

print("Detecting...")
protoPath = 'deploy.prototxt'
modelPath = 'hed_pretrained_bsds.caffemodel'
net = cv2.dnn.readNetFromCaffe(protoPath, modelPath)
cv2.dnn_registerLayer("Crop", CropLayer)

image = cv2.imread('C:\\Users\\Edwin\\PycharmProjects\\MLforSIH\\images\\imagee2.png')
(H, W) = image.shape[:2]

image = cv2.GaussianBlur(image, (5, 5), 0)
blob = cv2.dnn.blobFromImage(image, scalefactor=1.0, size=(W, H), mean=(104.00698793, 116.66876762, 122.67891434),
                             swapRB=False, crop=False)
net.setInput(blob)
hed = net.forward()
hed = cv2.resize(hed[0, 0], (W, H))
hed = (255 * hed).astype("uint8")

cv2.namedWindow("HED Filter", cv2.WINDOW_NORMAL)
cv2.imshow("HED Filter", hed)
cv2.resizeWindow("HED Filter", 700, 500)

cnts = cv2.findContours(hed, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
cnts = imutils.grab_contours(cnts)
(cnts, _) = contours.sort_contours(cnts)
pixelsPerMetric = None

point = (600, 500)
cv2.circle(image, point, 5, (255, 0, 0), 2)

for c in cnts:
    if cv2.contourArea(c) > 9000 and cv2.pointPolygonTest(c, point, False)==1:
        hull = cv2.convexHull(c)
        cv2.drawContours(image, [hull], -1, (0, 255, 0), 2)
        image = image[10:-10, 10:-10, :]
        print(f"Contour Area : {cv2.contourArea(c)/10}")
        hull = cv2.convexHull(c)
        print(f"Convex Hull Area : {cv2.contourArea(hull)/10}")
        orig = image.copy()
        box = cv2.minAreaRect(hull)
        box = cv2.cv.BoxPoints(box) if imutils.is_cv2() else cv2.boxPoints(box)
        box = np.array(box, dtype="int")
        box = perspective.order_points(box)
        cv2.drawContours(orig, [box.astype("int")], -1, (0, 255, 0), 2)
        for (x, y) in box:
            cv2.circle(orig, (int(x), int(y)), 5, (0, 0, 255), -1)

        (tl, tr, br, bl) = box
        (tltrX, tltrY) = midpoint(tl, tr)
        (blbrX, blbrY) = midpoint(bl, br)
        (tlblX, tlblY) = midpoint(tl, bl)
        (trbrX, trbrY) = midpoint(tr, br)
        cv2.circle(orig, (int(tltrX), int(tltrY)), 5, (255, 0, 0), -1)
        cv2.circle(orig, (int(blbrX), int(blbrY)), 5, (255, 0, 0), -1)
        cv2.circle(orig, (int(tlblX), int(tlblY)), 5, (255, 0, 0), -1)
        cv2.circle(orig, (int(trbrX), int(trbrY)), 5, (255, 0, 0), -1)
        cv2.line(orig, (int(tltrX), int(tltrY)), (int(blbrX), int(blbrY)), (255, 0, 255), 2)
        cv2.line(orig, (int(tlblX), int(tlblY)), (int(trbrX), int(trbrY)), (255, 0, 255), 2)
        dA = dist.euclidean((tltrX, tltrY), (blbrX, blbrY))
        dB = dist.euclidean((tlblX, tlblY), (trbrX, trbrY))
        if pixelsPerMetric is None:
            pixelsPerMetric = dB / 0.955
        dimA = dA / pixelsPerMetric
        dimB = dB / pixelsPerMetric
        cv2.putText(orig, "{:.1f}in".format(dimA), (int(tltrX - 15), int(tltrY - 10)), cv2.FONT_HERSHEY_SIMPLEX,
                    0.65, (255, 255, 255), 2)
        cv2.putText(orig, "{:.1f}in".format(dimB), (int(trbrX + 10), int(trbrY)), cv2.FONT_HERSHEY_SIMPLEX,
                    0.65, (255, 255, 255), 2)
        cv2.namedWindow("Image", cv2.WINDOW_NORMAL)
        cv2.imshow("Image", orig)
        cv2.resizeWindow("Image", 700, 500)
        cv2.waitKey(0)

cv2.imwrite("result.png", orig)
cv2.destroyAllWindows()