from flask import Blueprint, render_template, request, redirect, url_for
from app.models import customers

bp = Blueprint('customer', __name__, url_prefix='/customer')

@bp.route('/')
def customer_list():
    customer_data = list(customers.find({}, {'_id': 0}))
    return render_template('customers.html', customers=customer_data)

@bp.route('/add', methods=['POST'])
def add_customer():
    new_customer = request.form.to_dict()
    customers.insert_one(new_customer)
    return redirect(url_for('customer.customer_list'))