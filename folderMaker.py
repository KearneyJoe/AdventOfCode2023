import os

FILE_PATH = "/Users/joekearney/Desktop/AdventOfCode2023"
root_path = FILE_PATH

for i in range(1, 26):
    if i < 10:
        folder_num = '0{}'.format(i)
    else:
        folder_num = i

    folder_name = 'Day{}'.format(folder_num)
    day_js = 'day{}.js'.format(folder_num)
    day_txt = 'day{}_actual.txt'.format(folder_num)
    example_txt = 'day{}_example.txt'.format(folder_num)

    # Create folders
    os.mkdir(os.path.join(root_path, folder_name))

    # Create files
    open(os.path.join(root_path, folder_name, day_js), 'w').write(
        f"""const fs = require("fs");

const data = fs
  //.readFileSync("day{folder_num}_actual.txt", {{ encoding: "utf-8" }})
  .readFileSync("day{folder_num}_example.txt", {{ encoding: "utf-8" }})
  .split("\\n")
  .map((x) => parseInt(x));
"""
    )
    open(os.path.join(root_path, folder_name, day_txt), 'w')
    open(os.path.join(root_path, folder_name, example_txt), 'w')