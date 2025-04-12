export const terminalCommands = [
  "ls -la",
  "cd projects/",
  "git status",
  "docker-compose up -d",
  "kubectl get pods",
  "terraform apply",
  "aws ec2 describe-instances",
  "ansible-playbook deploy.yml"
];

export const runTypingAnimation = (
  typingElement: HTMLElement | null,
  onComplete?: () => void
) => {
  if (!typingElement) return;
  
  let currentTextIndex = 0;
  
  const typeText = () => {
    const text = terminalCommands[currentTextIndex];
    let i = 0;
    if (typingElement) typingElement.textContent = "";
    
    const typeChar = () => {
      if (i < text.length && typingElement) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, 100);
      } else {
        setTimeout(eraseText, 2000);
      }
    };
    
    typeChar();
  };
  
  const eraseText = () => {
    let text = typingElement?.textContent || "";
    
    const eraseChar = () => {
      if (text.length > 0 && typingElement) {
        text = text.substring(0, text.length - 1);
        typingElement.textContent = text;
        setTimeout(eraseChar, 50);
      } else {
        currentTextIndex = (currentTextIndex + 1) % terminalCommands.length;
        setTimeout(typeText, 500);
      }
    };
    
    eraseChar();
  };
  
  // Start the typing animation
  setTimeout(typeText, 1000);
  
  // Return cleanup function
  return () => {
    if (typingElement) typingElement.textContent = "";
  };
};
