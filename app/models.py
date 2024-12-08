from pymongo import MongoClient

# MongoDB connection
client = MongoClient("your-mongodb-atlas-uri")
db = client['beanbrew']

# Collections
customers = db['customers']
orders = db['orders']
inventory = db['inventory']
reports = db['reports']