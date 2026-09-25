'use client';

import { useEffect, useRef, useState } from 'react';

type VisualizationState = 'cv' | 'neural' | 'llm' | 'output';

export default function AIVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentState, setCurrentState] = useState<VisualizationState>('cv');
  const [transitionProgress, setTransitionProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // State transition logic
    const states: VisualizationState[] = ['cv', 'neural', 'llm', 'output'];
    let stateIndex = 0;
    let transitionStartTime = Date.now();
    const stateDuration = 4000; // 4 seconds per state
    const transitionDuration = 1000; // 1 second transition

    // CV visualization elements
    const cvElements = Array.from({ length: 8 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      width: 100 + Math.random() * 150,
      height: 80 + Math.random() * 100,
      confidence: 0.85 + Math.random() * 0.14,
      label: ['PERSON', 'CAR', 'OBJECT', 'FACE'][Math.floor(Math.random() * 4)],
    }));

    // Neural network nodes
    const nnNodes = Array.from({ length: 30 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    // LLM document/chunk elements
    const llmDocuments = Array.from({ length: 12 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      width: 60 + Math.random() * 40,
      height: 80 + Math.random() * 40,
      relevance: Math.random(),
    }));

    // Output elements
    const outputElements = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      text: ['DETECTED', 'CLASSIFIED', 'PREDICTED', 'GENERATED', 'ANALYZED', 'PROCESSED'][i],
      confidence: 0.7 + Math.random() * 0.3,
    }));

    const drawCV = (progress: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw scanning line
      const scanY = (Date.now() % 3000) / 3000 * canvas.height;
      ctx.strokeStyle = `rgba(124, 58, 237, ${0.3 * progress})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();

      // Draw bounding boxes
      cvElements.forEach((element, i) => {
        const alpha = progress * (0.5 + Math.sin(Date.now() / 1000 + i) * 0.3);
        
        // Box
        ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.strokeRect(element.x, element.y, element.width, element.height);
        
        // Corner accents
        const cornerSize = 8;
        ctx.fillStyle = `rgba(124, 58, 237, ${alpha})`;
        ctx.fillRect(element.x - 2, element.y - 2, cornerSize, 2);
        ctx.fillRect(element.x - 2, element.y - 2, 2, cornerSize);
        ctx.fillRect(element.x + element.width - cornerSize + 2, element.y - 2, cornerSize, 2);
        ctx.fillRect(element.x + element.width, element.y - 2, 2, cornerSize);
        ctx.fillRect(element.x - 2, element.y + element.height, cornerSize, 2);
        ctx.fillRect(element.x - 2, element.y + element.height - cornerSize, 2, cornerSize);
        ctx.fillRect(element.x + element.width - cornerSize + 2, element.y + element.height, cornerSize, 2);
        ctx.fillRect(element.x + element.width, element.y + element.height - cornerSize, 2, cornerSize);
        
        // Label
        ctx.fillStyle = `rgba(124, 58, 237, ${alpha})`;
        ctx.font = '12px SF Mono, monospace';
        ctx.fillText(`${element.label} ${(element.confidence * 100).toFixed(1)}%`, element.x, element.y - 8);
      });
    };

    const drawNeural = (progress: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nnNodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 58, 237, ${0.6 * progress})`;
        ctx.fill();
      });
      
      // Draw connections
      nnNodes.forEach((node, i) => {
        nnNodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.2 * progress * (1 - distance / 200)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
    };

    const drawLLM = (progress: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw document chunks
      llmDocuments.forEach((doc, i) => {
        const alpha = progress * (0.3 + doc.relevance * 0.4);
        
        // Document rectangle
        ctx.fillStyle = `rgba(124, 58, 237, ${alpha * 0.1})`;
        ctx.fillRect(doc.x, doc.y, doc.width, doc.height);
        
        // Border
        ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(doc.x, doc.y, doc.width, doc.height);
        
        // Text lines
        ctx.fillStyle = `rgba(124, 58, 237, ${alpha * 0.5})`;
        for (let j = 0; j < 3; j++) {
          ctx.fillRect(doc.x + 4, doc.y + 8 + j * 12, doc.width - 8, 2);
        }
        
        // Relevance indicator
        ctx.fillStyle = `rgba(124, 58, 237, ${alpha})`;
        ctx.fillRect(doc.x, doc.y + doc.height - 4, doc.width * doc.relevance, 4);
      });
      
      // Draw connection lines between related documents
      llmDocuments.forEach((doc, i) => {
        llmDocuments.slice(i + 1).forEach((otherDoc) => {
          if (doc.relevance > 0.7 && otherDoc.relevance > 0.7) {
            const dx = doc.x - otherDoc.x;
            const dy = doc.y - otherDoc.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 300) {
              ctx.beginPath();
              ctx.moveTo(doc.x + doc.width / 2, doc.y + doc.height / 2);
              ctx.lineTo(otherDoc.x + otherDoc.width / 2, otherDoc.y + otherDoc.height / 2);
              ctx.strokeStyle = `rgba(124, 58, 237, ${0.3 * progress * (1 - distance / 300)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });
    };

    const drawOutput = (progress: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw output elements
      outputElements.forEach((element, i) => {
        const alpha = progress * element.confidence;
        
        // Background
        ctx.fillStyle = `rgba(124, 58, 237, ${alpha * 0.1})`;
        ctx.fillRect(element.x - 10, element.y - 20, 200, 40);
        
        // Text
        ctx.fillStyle = `rgba(250, 250, 250, ${alpha})`;
        ctx.font = '14px SF Mono, monospace';
        ctx.fillText(element.text, element.x, element.y);
        
        // Confidence bar
        ctx.fillStyle = `rgba(124, 58, 237, ${alpha})`;
        ctx.fillRect(element.x, element.y + 8, 150 * element.confidence, 4);
        
        // Decorative elements
        ctx.strokeStyle = `rgba(124, 58, 237, ${alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(element.x - 20, element.y);
        ctx.lineTo(element.x - 10, element.y);
        ctx.stroke();
      });
    };

    const animate = () => {
      const now = Date.now();
      const elapsed = now - transitionStartTime;
      
      // Calculate current state and transition progress
      const totalCycleTime = stateDuration + transitionDuration;
      const cyclePosition = elapsed % (totalCycleTime * states.length);
      const currentCycleIndex = Math.floor(cyclePosition / totalCycleTime);
      
      if (currentCycleIndex !== stateIndex) {
        stateIndex = currentCycleIndex;
        setCurrentState(states[stateIndex]);
        transitionStartTime = now;
      }
      
      const timeInCurrentState = elapsed - (stateIndex * totalCycleTime);
      const isInTransition = timeInCurrentState > stateDuration;
      const progress = isInTransition 
        ? Math.min(1, (timeInCurrentState - stateDuration) / transitionDuration)
        : 1;
      
      // Draw current state
      switch (states[stateIndex]) {
        case 'cv':
          drawCV(progress);
          break;
        case 'neural':
          drawNeural(progress);
          break;
        case 'llm':
          drawLLM(progress);
          break;
        case 'output':
          drawOutput(progress);
          break;
      }
      
      // Draw state label
      ctx.fillStyle = 'rgba(136, 136, 136, 0.5)';
      ctx.font = '12px SF Mono, monospace';
      const stateLabels = {
        cv: 'COMPUTER VISION',
        neural: 'NEURAL NETWORK',
        llm: 'LLM / RAG',
        output: 'OUTPUT'
      };
      ctx.fillText(stateLabels[states[stateIndex]], 20, canvas.height - 20);
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.22 }}
    />
  );
}