import os

for i in range(4,81):
    path = f"Video {i}"
    os.mkdir(path)
    with open(f"{path}/index.html","w") as html:
        html.write("")
    with open(f"{path}/style.css","w") as css:
        css.write("")
    with open(f"{path}/script.js","w") as js:
        js.write("")