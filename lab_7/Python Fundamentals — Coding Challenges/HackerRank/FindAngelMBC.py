import math
ab=int(input())
bc=int(input())
mbc=math.atan(ab/bc) * (180/math.pi)
print(str(round(mbc))+ "\u00B0")