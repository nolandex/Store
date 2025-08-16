-- Creating categories table for product organization
CREATE TABLE IF NOT EXISTS categories (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(100),
    color VARCHAR(7),
    order_index INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert main categories
INSERT INTO categories (id, name, description, icon, color, order_index, status) VALUES
('popular', 'Populer', 'Kursus paling diminati', 'Star', '#FFD700', 1, 'active'),
('web-development', 'Web Development', 'Pengembangan website dan aplikasi web', 'Code', '#3B82F6', 2, 'active'),
('digital-marketing', 'Digital Marketing', 'Strategi pemasaran digital', 'TrendingUp', '#10B981', 3, 'active'),
('design-services', 'Design Services', 'Layanan desain grafis dan UI/UX', 'Palette', '#F59E0B', 4, 'active'),
('mobile-apps', 'Mobile Apps', 'Pengembangan aplikasi mobile', 'Smartphone', '#8B5CF6', 5, 'active'),
('e-commerce', 'E-Commerce', 'Bisnis perdagangan elektronik', 'ShoppingCart', '#EF4444', 6, 'active'),
('consulting', 'Consulting', 'Layanan konsultasi bisnis', 'Users', '#06B6D4', 7, 'active'),
('content-creation', 'Content Creation', 'Pembuatan konten kreatif', 'PenTool', '#F97316', 8, 'active');
