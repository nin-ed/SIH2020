from urllib import request
from PIL import Image
import os
import math
from time import sleep
from convertor import dms_2_deg

class Scraper:
    def __init__(self, lat, lng, zoom=12):
        self._lat = lat
        self._lng = lng
        self._zoom = zoom

    def getXY(self):
        tile_size = 256
        numTiles = 1 << self._zoom
        point_x = (tile_size / 2 + self._lng * tile_size / 360.0) * numTiles//tile_size
        sin_y = math.sin(self._lat * (math.pi / 180.0))
        point_y = ((tile_size/2)+0.5*math.log((1+sin_y)/(1-sin_y))*-(tile_size/(2*math.pi)))*numTiles//tile_size
        return int(point_x), int(point_y)

    def generateImage(self, **kwargs):
        start_x = kwargs.get('start_x', None)
        start_y = kwargs.get('start_y', None)
        tile_width = kwargs.get('tile_width', 5)
        tile_height = kwargs.get('tile_height', 5)
        if start_x == None or start_y == None:
            start_x, start_y = self.getXY()
        width, height = 256 * tile_width, 256 * tile_height
        map_img = Image.new('RGB', (width, height))
        for x in range(0, tile_width):
            for y in range(0, tile_height):
                url = 'https://mt0.google.com/vt/lyrs=y&?x='+str(start_x + x)+'&y='+str(start_y + y)+'&z='+str(self._zoom)
                current_tile = str(x) + '-' + str(y)
                print(str(x)+'-'+str(y))
                request.urlretrieve(url, current_tile)
                im = Image.open(current_tile)
                map_img.paste(im, (x * 256, y * 256))
                os.remove(current_tile)
                sleep(2)
        return map_img


def main():
    coor1 = '22,00,04'
    coor2 = '74,59,57'
    zoom = 19
    sc = Scraper(dms_2_deg(coor1), dms_2_deg(coor2), zoom)
    print(f"The tile coordinates are {sc.getXY()}")
    try:
        img = sc.generateImage()
    except IOError:
        print("Could not generate the image - try adjusting the zoom level and checking your coordinates")
    else:
        img.save("image1.png")
        print("The map has successfully been created")

if __name__ == '__main__':
    main()
