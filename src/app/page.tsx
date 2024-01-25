"use client";

import EarthScene from "@/components/Earth";
import { motion, useScroll } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <section className="w-full h-screen overflow-hidden relative">
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center">
        <motion.div className={styles.title} />
        <span className="absolute text-6xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Sail.ai
        </span>
      </div>
      <motion.div
        className="absolute top-0 -right-1/2 w-full h-full"
        style={{
          opacity: scrollYProgress,
        }}
      >
        <EarthScene />
      </motion.div>
    </section>
  );
}
