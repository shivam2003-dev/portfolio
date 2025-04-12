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
    <div className={`terminal bg-black text-green-400 rounded-lg p-6 ${className}`}>
      <div className="flex justify-between mb-4 border-b border-green-500/30 pb-2">
        <div className="text-xs text-gray-500">Terminal - Security Scan</div>
        <div className="flex space-x-1">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>

      <div className="mb-1">
        <span className="command text-green-400">$</span> <span className="text-gray-400">nmap -sS -sV --script vuln target-system</span>
      </div>
      <div className="mb-1 text-green-300 text-sm">
        <span className="command">Starting Nmap scan...</span>
      </div>
      <div className="mb-1 text-gray-400 text-sm">
        <span className="command text-green-400">$</span> whoami
      </div>
      <div className="mb-3 text-green-400 text-sm">
        shivam@devops
      </div>
      <div className="mb-1 text-gray-400 text-sm">
        <span className="command text-green-400">$</span> cat skills.json
      </div>
      <div className="mb-1 text-green-300 text-sm">
        {`{`}<br />
        {`  "cloud": ["AWS", "Azure", "GCP"],`}<br />
        {`  "containers": ["Docker", "Kubernetes", "Helm"],`}<br />
        {`  "infra": ["Terraform", "Ansible", "CloudFormation"],`}<br />
        {`  "security": ["ZeroTrust", "SAST/DAST", "SecOps"]`}<br />
        {`}`}
      </div>
      <div className="mt-3 text-green-400">
        <span className="command text-green-500">shivam@devops:~$</span> <span ref={typingRef} className="typing-animation text-gray-200"></span>
      </div>
    </div>
  );
};

export default Terminal;
