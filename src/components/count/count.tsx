import { useState, useEffect } from 'react';

interface CounterProps {
  endValue: number;
  duration: number;
}

export function Count({ endValue, duration }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration / 10); // Aumenta o valor gradualmente

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue); // Para o contador quando atinge o valor final
        clearInterval(counter); // Limpa o intervalo
      } else {
        setCount(Math.round(start)); // Atualiza o contador
      }
    }, 10); // Atualiza a cada 10ms para uma animação suave

    return () => clearInterval(counter); // Limpa o intervalo quando o componente desmonta
  }, [endValue, duration]);

  return (
    <div className="text-[white] text-3xl font-extrabold ">
      {count}
    </div>
  );
}

