import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["HAPPEN", "A SUCCESS", "GREAT", "WOW"];

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
      <h2 className="inline-block text-left text-white text-[200px] font-header -mb-20">
        MAKE IT{"\u00A0"}
        <TextTransition springConfig={presets.stiff}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h2>
    </>
  );
}
