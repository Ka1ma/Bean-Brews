import pytest
from app.models import customers, orders, inventory

def test_customer_collection():
    """Test if the customers collection is accessible and insert a sample document."""
    sample_customer = {"name": "Test User", "email": "test@example.com"}
    result = customers.insert_one(sample_customer)
    assert result.inserted_id is not None
    customers.delete_one({"_id": result.inserted_id})  # Cleanup

def test_orders_collection():
    """Test if the orders collection is accessible and insert a sample document."""
    sample_order = {"customer_id": "12345", "item_name": "Cappuccino", "total_price": 100}
    result = orders.insert_one(sample_order)
    assert result.inserted_id is not None
    orders.delete_one({"_id": result.inserted_id})  # Cleanup

def test_inventory_collection():
    """Test if the inventory collection is accessible and insert a sample document."""
    sample_item = {"product_id": "P001", "product_name": "Espresso", "stock": 50, "price": 150}
    result = inventory.insert_one(sample_item)
    assert result.inserted_id is not None
    inventory.delete_one({"_id": result.inserted_id})  # Cleanup