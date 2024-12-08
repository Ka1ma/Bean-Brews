from flask import Blueprint, render_template, request, redirect, url_for
from app.models import inventory

bp = Blueprint('inventory', __name__, url_prefix='/inventory')

@bp.route('/')
def inventory_list():
    inventory_data = list(inventory.find({}, {'_id': 0}))
    return render_template('inventory.html', inventory=inventory_data)

@bp.route('/update', methods=['POST'])
def update_inventory():
    update_data = request.form.to_dict()
    inventory.update_one({'product_id': update_data['product_id']}, {'$set': update_data}, upsert=True)
    return redirect(url_for('inventory.inventory_list'))