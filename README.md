# BeanBrew Web App

**BeanBrew** is a Python-based Flask web application designed to manage customers, orders, inventory, and sales analytics for a coffee shop. The application uses MongoDB Atlas as the database backend.

---

## Features

- Manage customer profiles (Add, View).
- Record orders and track inventory.
- Generate detailed sales and inventory analytics.
- Lightweight, modular, and easy-to-deploy Python/Flask setup.

---

## Project Structure

```
BeanBrew_WebApp/
├── app/                      # Core application files
│   ├── __init__.py           # Flask app initialization
│   ├── models.py             # Database models and MongoDB integration
│   ├── routes/               # API routes
│   │   ├── customers.py      # Customer-related routes
│   │   ├── orders.py         # Order-related routes
│   │   ├── inventory.py      # Inventory-related routes
│   │   ├── analytics.py      # Analytics-related routes
│   ├── templates/            # HTML templates for UI
│   │   ├── base.html         # Base layout for pages
│   │   ├── customers.html    # Customers page
│   │   ├── orders.html       # Orders page
│   │   ├── inventory.html    # Inventory page
│   │   ├── analytics.html    # Analytics page
│   ├── static/               # Static assets for UI
│       ├── styles.css        # CSS for styling
│       ├── scripts.js        # JavaScript for interactivity
├── config.py                 # Configuration file for the app
├── run.py                    # Main entry point for the application
├── requirements.txt          # List of dependencies
```

---

## Prerequisites

1. **Python**: Install Python 3.x from [Python Official Website](https://python.org).
2. **MongoDB Atlas**: Set up a free MongoDB Atlas cluster:
   - Sign up for [MongoDB Atlas](https://www.mongodb.com/atlas).
   - Create a cluster and database named `beanbrew`.
   - Add collections: `customers`, `orders`, `inventory`, `reports`.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Ka1ma/Bean-Brews.git
cd BeanBrew_WebApp
```

### 2. Set Up Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure MongoDB Connection

1. Open `app/models.py`.
2. Replace the placeholder with your MongoDB Atlas connection string:

```python
client = MongoClient("your-mongodb-atlas-uri")
```

**Example**:

```python
client = MongoClient("mongodb+srv://<username>:<password>@cluster.mongodb.net/beanbrew")
```

### 5. Run the Application

Start the Flask server:

```bash
python run.py
```

Visit the app in your browser at:

```
http://127.0.0.1:5000
```

---

## Database Structure

### Collections

1. **Customers**
   ```json
   {
       "name": "John Doe",
       "email": "john.doe@example.com"
   }
   ```

2. **Orders**
   ```json
   {
       "customer_id": "123",
       "item_name": "Cappuccino",
       "total_price": 150
   }
   ```

3. **Inventory**
   ```json
   {
       "product_id": "P001",
       "product_name": "Latte",
       "stock": 20,
       "price": 100
   }
   ```

4. **Reports**
   ```json
   {
       "type": "sales",
       "data": [
           {"date": "2024-01-01", "sales": 5000}
       ]
   }
   ```

---

## Troubleshooting

1. **ModuleNotFoundError**:
   - Ensure you are in the virtual environment:

     ```bash
     source venv/bin/activate
     ```

   - Reinstall dependencies:

     ```bash
     pip install -r requirements.txt
     ```

2. **MongoDB Connection Errors**:
   - Verify the MongoDB URI is correct.
   - Whitelist your IP address in MongoDB Atlas.

3. **Server Not Starting**:
   - Check for syntax errors.
   - Ensure Flask is installed:

     ```bash
     pip install flask
     ```

---

## Future Improvements

- Add authentication for admin users.
- Integrate advanced analytics with charts.
- Optimize database queries for scalability.

---

## Contributors

- **Farrah Apag**: Full Stack Developer & Backend Specialist
- **Mychal Redoblado**: Full Stack Developer
- **Aliyah Almonia**: Contributor
- **Hannah Lawi**: Contributor
```
