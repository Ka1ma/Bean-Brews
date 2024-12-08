BeanBrew Web App

BeanBrew is a Python-based Flask web application for managing customers, orders, inventory, and analytics for a coffee shop. It uses MongoDB Atlas as the database backend.

Features
	•	Manage customer profiles (Add, View).
	•	Record orders and track inventory.
	•	Generate sales and inventory analytics.
	•	Lightweight and easy-to-deploy Python/Flask setup.

Project Structure

BeanBrew_WebApp/
├── app/
│   ├── __init__.py          # Flask app initialization
│   ├── models.py            # MongoDB database models
│   ├── routes/              # Application routes
│   │   ├── customer.py      # Customer routes
│   │   ├── orders.py        # Order routes
│   │   ├── inventory.py     # Inventory routes
│   │   ├── analytics.py     # Analytics routes
│   ├── templates/           # HTML templates for UI
│   │   ├── base.html        # Base template layout
│   │   ├── customers.html   # Customers page
│   │   ├── orders.html      # Orders page
│   │   ├── inventory.html   # Inventory page
│   │   ├── analytics.html   # Analytics page
│   ├── static/              # Static assets
│       ├── styles.css       # CSS for styling
│       ├── scripts.js       # JavaScript for interactivity
├── config.py                # Configuration file
├── run.py                   # Main entry point
├── requirements.txt         # Dependencies

Prerequisites
	1.	Python: Install Python 3.x from https://python.org.
	2.	MongoDB Atlas: Set up a free MongoDB Atlas cluster:
	•	Sign up for MongoDB Atlas.
	•	Create a cluster and database named beanbrew.
	•	Add collections: customers, orders, inventory, reports.

Setup Instructions

Clone the Repository

git clone https://github.com/Ka1ma/Bean-Brews.git
cd BeanBrew_WebApp

Set Up Virtual Environment

python3 -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows

Install Dependencies

pip install -r requirements.txt

Configure MongoDB Connection
	1.	Open app/models.py.
	2.	Replace the placeholder with your MongoDB Atlas connection string:

client = MongoClient("your-mongodb-atlas-uri")

Example:

client = MongoClient("mongodb+srv://<username>:<password>@cluster.mongodb.net/beanbrew")

Running the Application

Start the Flask server:

python run.py

Visit the app in your browser at:

http://127.0.0.1:5000

Database Structure

Collections

1. Customers

{
    "name": "John Doe",
    "email": "john.doe@example.com"
}

2. Orders

{
    "customer_id": "123",
    "item_name": "Cappuccino",
    "total_price": 150
}

3. Inventory

{
    "product_id": "P001",
    "product_name": "Latte",
    "stock": 20,
    "price": 100
}

4. Reports

{
    "type": "sales",
    "data": [
        {"date": "2024-01-01", "sales": 5000}
    ]
}

Troubleshooting
	1.	ModuleNotFoundError:
	•	Ensure you are in the virtual environment:

source venv/bin/activate


	•	Reinstall dependencies:

pip install -r requirements.txt


	2.	MongoDB Connection Errors:
	•	Verify the MongoDB URI is correct.
	•	Whitelist your IP address in MongoDB Atlas.
	3.	Server Not Starting:
	•	Check for syntax errors.
	•	Ensure Flask is installed:

pip install flask

Future Improvements
	•	Add authentication for admin users.
	•	Integrate advanced analytics with charts.
	•	Optimize database queries for scalability.

Contributors
	•	Farrah Apag: Full Stack Developer & Backend Specialist
	•	Mychal Redoblado: Full Stack Developer
	•	Aliyah Almonia: Contributor
	•	Hannah Lawi: Contributor
