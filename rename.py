import os
_src = "photos"
_ext = ".jpeg"
for i,filename in enumerate(os.listdir(_src)):
    if filename.endswith(_ext):
        os.rename(_src + "/" + filename, str(i) +_ext)