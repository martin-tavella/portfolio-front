import { useEffect, useState } from "react";
import "./styles/cursor-animation.css"; 

type Props = {
  onComplete: () => void;
};

export const TerminalLoader = ({ onComplete }: Props) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [cursorAnimate, setCursorAnimate] = useState<boolean>(false);

  const steps = [
    { text: "  npm run start", delay: 80 },
    { text: " ✓ Ready on http://localhost:3000", delay: 70 },
    { text: " Welcome to my portfolio!", delay: 80 },
  ];

  useEffect(() => {
    if (currentStep < steps.length) {
      const step = steps[currentStep];
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < step.text.length - 1) {
          setDisplayText((prev) => prev + step.text[index]);
          index++;
        } else {
        clearInterval(typeInterval);
          setDisplayText("")
          setTimeout(() => {
            setCurrentStep((prev) => prev + 1);
          }, 400);
        }
      }, step.delay);
      return () => clearInterval(typeInterval);
    } else {
        setShowCursor(false);
        console.log("All steps completed"); 
            // setCursorText("");
            setCursorAnimate(true);
            setTimeout(() => {
                onComplete();
            }, 800);
        }
    }, [currentStep, onComplete]);

    useEffect(() => {
        if (showCursor) {
            const cursorInterval = setInterval(() => {
                setShowCursor((prev) => !prev);
            }, 530);
            return () => clearInterval(cursorInterval);
        }
    }, [])


  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="font-mono text-4xl text-green-400 whitespace-pre-wrap">
          {displayText}
          <span className={`${showCursor ? "text-green-400" : "text-black"} ${cursorAnimate && "terminal-loader"} ml-0.5 text-5xl`}>|</span>
        </div>
      </div>
    </div>
  );
};
