import json
import os
import psycopg2

def handler(event, context):
    """Создание нового заказа на букет"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    headers = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    if event.get('httpMethod') != 'POST':
        return {'statusCode': 405, 'headers': headers, 'body': json.dumps({'error': 'Method not allowed'})}

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    product_name = body.get('product_name', '').strip()
    product_price = body.get('product_price', 0)
    comment = body.get('comment', '').strip()

    if not name or not phone or not product_name:
        return {'statusCode': 400, 'headers': headers, 'body': json.dumps({'error': 'Заполните имя, телефон и товар'})}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO orders (customer_name, phone, product_name, product_price, comment) VALUES (%s, %s, %s, %s, %s) RETURNING id",
        (name, phone, product_name, product_price, comment)
    )
    order_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {'statusCode': 200, 'headers': headers, 'body': json.dumps({'success': True, 'order_id': order_id})}
