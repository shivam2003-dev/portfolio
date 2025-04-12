import { useEffect, useRef } from 'react';
import { runTypingAnimation } from '@/lib/terminal';

interface TerminalProps {
  className?: string;
}

const Terminal = ({ className = '' }: TerminalProps) => {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cleanup = runTypingAnimation(typingRef.current);
    return cleanup;
  }, []);

  return (
    <div className={`terminal bg-primary-dark text-slate-200 rounded-lg p-6 shadow-xl ${className}`}>
      <div className="mb-1 text-slate-400">
        <span className="command">$</span> bash
      </div>
      <div className="mb-1">
        <span className="command">#!/bin/bash</span>
      </div>
      <div className="mb-1">
        <span className="command">echo</span> <span className="output">"Hello, I'm Shivam"</span>
      </div>
      <div className="mb-1">
        <span className="command">echo</span> <span className="output">"DevOps Engineer specializing in infrastructure automation"</span>
      </div>
      <div className="mb-1">
        <span className="command">echo</span> <span className="output">"Let's build reliable, scalable systems together"</span>
      </div>
      <div className="mt-5 text-slate-400">
        <span className="command">shivam@devops:~$</span> <span ref={typingRef} className="typing-animation text-white"></span>
      </div>
    </div>
  );
};

export default Terminal;
