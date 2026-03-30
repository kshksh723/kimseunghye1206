import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number; // 속도(ms), 기본값 100ms
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    // 텍스트가 완성되면 중단
    if (currentIndex >= text.length) {
      return;
    }

    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, [currentIndex, text, speed]);

  return (
   <div className="p-4 flex flex-col items-center justify-center text-center mono-space">
      <span className="cursor">
      {displayedText}
      |</span> {/* 커서 깜빡임 효과 */}
    </div>
  );
};

export default Typewriter;
