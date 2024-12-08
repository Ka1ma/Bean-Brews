import pytest
from app import create_app

@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    client = app.test_client()
    yield client

def test_customer_endpoint(client):
    """Test the /customer/ endpoint."""
    response = client.get('/customer/')
    assert response.status_code == 200
    assert isinstance(response.json, list)

def test_orders_endpoint(client):
    """Test the /orders/ endpoint."""
    response = client.get('/orders/')
    assert response.status_code == 200
    assert isinstance(response.json, list)

def test_inventory_endpoint(client):
    """Test the /inventory/ endpoint."""
    response = client.get('/inventory/')
    assert response.status_code == 200
    assert isinstance(response.json, list)
    