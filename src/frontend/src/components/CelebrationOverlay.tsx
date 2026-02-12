import { Heart } from 'lucide-react';

export default function CelebrationOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Floating hearts animation */}
      {[...Array(20)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-valentine-primary fill-valentine-primary animate-float-up opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            width: `${20 + Math.random() * 20}px`,
            height: `${20 + Math.random() * 20}px`,
          }}
        />
      ))}
    </div>
  );
}
