import { useState, useEffect, useRef } from 'react';

const Counter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <h2 ref={ref}>{count.toLocaleString()}{suffix}</h2>;
};

export const Analytics = () => {
    return (
        <>
            <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="div1">
              <Counter end={50} suffix="+" />
              <p>registered companies</p>
            </div>
            <div className="div1">
              <Counter end={10000} suffix="+" />
              <p>Happy Clients</p>
            </div>
            <div className="div1">
              <Counter end={500} suffix="+" />
              <p>Well known developers</p>
            </div>
            <div className="div1">
              <h2>24/7</h2>
              <p>Services</p>
            </div>
          </div>
        </section>
        </>
    )
}