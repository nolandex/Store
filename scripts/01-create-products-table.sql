-- Creating products table for admin management
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) DEFAULT 0,
    image_url VARCHAR(500),
    category_id VARCHAR(100),
    status VARCHAR(20) DEFAULT 'active',
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert existing products from static data
INSERT INTO products (name, description, image_url, category_id, status, featured) VALUES
('Template Website Bisnis', 'Template website profesional untuk bisnis UMKM dengan desain modern dan responsif.', '/images/21.jpg', 'web-development', 'active', true),
('Paket Branding Lengkap', 'Paket lengkap branding bisnis termasuk logo, kartu nama, dan guidelines brand.', '/images/22.jpg', 'design-services', 'active', false),
('Tools Marketing Digital', 'Kumpulan tools dan template untuk marketing digital yang efektif.', '/images/23.jpg', 'digital-marketing', 'active', true),
('E-book Strategi Bisnis', 'Panduan lengkap strategi bisnis digital untuk pemula hingga advanced.', '/images/24.jpg', 'consulting', 'active', false);
