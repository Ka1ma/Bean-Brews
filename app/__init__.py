from flask import Flask
from app.routes.customer import bp as customer_bp
from app.routes.orders import bp as orders_bp
from app.routes.inventory import bp as inventory_bp
from app.routes.analytics import bp as analytics_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(customer_bp)
    app.register_blueprint(orders_bp)
    app.register_blueprint(inventory_bp)
    app.register_blueprint(analytics_bp)
    return app