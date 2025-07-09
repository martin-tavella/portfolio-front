import { useEffect, useState } from "react";

type Props = {
  onComplete: () => void;
};

export const TerminalLoader = ({ onComplete }: Props) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showCursor, setShowCursor] = useState<boolean>(true);

  const steps = [
    { text: "  npm run build", delay: 80 },
    { text: " ✓ Compiled successfully!", delay: 80 },
    { text: " npm run start", delay: 80 },
    { text: " ✓ Ready on http://localhost:3000", delay: 80 },
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
          }, 800);
        }
      }, step.delay);
      return () => clearInterval(typeInterval);
    } else {
        setTimeout(() => {
            setShowCursor(false);
            setTimeout(() => {
                onComplete();
            }, 500);
        }, 500);
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
        <div className="font-mono text-2xl text-green-400 whitespace-pre-wrap">
          {displayText}
          {showCursor && <span className="text-green-400">█</span>}
        </div>
      </div>
    </div>
  );
};
