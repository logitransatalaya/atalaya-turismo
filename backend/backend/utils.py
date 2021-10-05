from pymongo import MongoClient


client = MongoClient("mongodb+srv://developer-atalaya:atalaya1234@cluster0.bwxgo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client['test']
col = db['test1 ']
 
# print(db.list_collection_names())
dic = {'name':'El kalixto', 'age':'21'}
x = col.insert_one(dic)
print(x)