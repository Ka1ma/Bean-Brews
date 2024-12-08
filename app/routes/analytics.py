from flask import Blueprint, render_template
from app.models import orders, inventory

bp = Blueprint('analytics', __name__, url_prefix='/analytics')

@bp.route('/')
def analytics_dashboard():
    total_sales = sum(order['total_price'] for order in orders.find())
    low_stock_items = list(inventory.find({'stock': {'$lt': 10}}, {'_id': 0}))
    return render_template('analytics.html', total_sales=total_sales, low_stock_items=low_stock_items)