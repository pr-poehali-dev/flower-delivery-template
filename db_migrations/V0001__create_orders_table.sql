CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  product_price INTEGER NOT NULL,
  comment TEXT DEFAULT '',
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);