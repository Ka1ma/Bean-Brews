from flask import Blueprint, render_template, request, redirect, url_for
from app.models import orders

bp = Blueprint('orders', __name__, url_prefix='/orders')

@bp.route('/')
def order_list():
    order_data = list(orders.find({}, {'_id': 0}))
    return render_template('orders.html', orders=order_data)

@bp.route('/add', methods=['POST'])
def add_order():
    new_order = request.form.to_dict()
    orders.insert_one(new_order)
    return redirect(url_for('orders.order_list'))