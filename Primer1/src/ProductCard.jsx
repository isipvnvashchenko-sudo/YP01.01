import { useState } from 'react';

export default function ProductCard({ title, price, image }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>Цена: {price} ₽</p>
      <button onClick={() => setCount(count + 1)}>
        Добавить в корзину
      </button>
      <p>В корзине: {count} шт.</p>
    </div>
  );
}