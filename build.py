from model import *

db.connect()

db.drop_tables([Board], safe=True, cascade=True)
db.create_tables([Board], safe=True)

for i in range(10):
    Board.create(title = "board" + str(i), body = "body" + str(i))
