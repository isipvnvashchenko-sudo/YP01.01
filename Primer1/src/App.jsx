import ProductCard from './ProductCard';
import './index.css';

import heroImg from './assets/hero.png';


export default function App() {
  const products = [
    {
      id: 1,
      title: 'Смартфон',
      price: 30000,
      image: heroImg,
    },
    {
      id: 2,
      title: 'Ноутбук',
      price: 75000,
      image: heroImg,
    },
    {
      id: 3,
      title: 'Наушники',
      price: 5000,
      image: heroImg,
    },
  ];

  return (
    <div className="app-container">
      <h1>Редбульчики</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}