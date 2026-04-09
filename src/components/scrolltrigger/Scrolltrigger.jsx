// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// export default function StatsSection() {
//   const { ref, inView } = useInView({
//     triggerOnce: true, // run only once
//     threshold: 0.3,    // when 30% visible
//   });

//   return (
//     <div ref={ref} style={styles.container}>
//       <div style={styles.box}>
//         <h1>
//           {inView && <CountUp end={20} duration={2} />}+
//         </h1>
//         <p>No of Products</p>
//       </div>

//       <div style={styles.box}>
//         <h1>
//           {inView && <CountUp end={2000} duration={2} />}+
//         </h1>
//         <p>Distributors</p>
//       </div>

//       <div style={styles.box}>
//         <h1>
//           {inView && <CountUp end={6000} duration={2} />}+
//         </h1>
//         <p>Consumers</p>
//       </div>

//       <div style={styles.box}>
//         <h1>
//           {inView && <CountUp end={40} duration={2} />}+
//         </h1>
//         <p>Years of Experience</p>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "space-around",
//     background: "red",
//     color: "white",
//     padding: "50px 0",
//     textAlign: "center",
//   },
//   box: {
//     flex: 1,
//   },
// };




import { useState, useEffect, useRef } from "react";

const stats = [
  { end: 20, label: "Products", suffix: "+" },
  { end: 2000, label: "Distributors", suffix: "+" },
  { end: 6000, label: "Consumers", suffix: "+" },
  { end: 40, label: "Years of Experience", suffix: "+" },
];

function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);

  return count;
}

function StatBox({ end, label, suffix }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const count = useCountUp(end, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={styles.box}>
      <h2 style={styles.number}>
        {count.toLocaleString()}{suffix}
      </h2>
      <p style={styles.label}>{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <div style={styles.container}>
      {stats.map((stat) => (
        <StatBox key={stat.label} {...stat} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    background: "#cc0000",
    color: "white",
    padding: "50px 20px",
    textAlign: "center",
    gap: "20px",
  },
  box: {
    flex: "1 1 150px",
  },
  number: {
    fontSize: "2.5rem",
    fontWeight: "700",
    margin: "0 0 8px",
  },
  label: {
    fontSize: "1rem",
    margin: 0,
    opacity: 0.9,
  },
};