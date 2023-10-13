import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["HAPPEN", "GREAT", "WOW"];

export default function AnimatedText() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <h2 className="inline-block text-left text-white lg:text-[180px] font-header lg:-mb-16 md:text-[120px] md:-mb-12 sm:text-[100px] sm:-mb-8 text-[80px] sm:leading-normal  leading-[80px] text-shadow">
        MAKE IT{"\u00A0"}
        <TextTransition springConfig={presets.stiff}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </h2>
    </>
  );
}
