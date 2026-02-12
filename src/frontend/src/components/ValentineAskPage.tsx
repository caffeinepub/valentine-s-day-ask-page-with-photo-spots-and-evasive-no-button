import { useState, useRef } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import CelebrationOverlay from './CelebrationOverlay';
import PostYesMovieDatePage from './PostYesMovieDatePage';

export default function ValentineAskPage() {
  const [accepted, setAccepted] = useState(false);
  const [showMovieDatePage, setShowMovieDatePage] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [isNoButtonAbsolute, setIsNoButtonAbsolute] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    if (accepted) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonWidth = 120;
    const buttonHeight = 48;

    // Generate random position within safe viewport bounds
    const maxLeft = viewportWidth - buttonWidth - 40;
    const maxTop = viewportHeight - buttonHeight - 40;
    
    const newLeft = Math.max(20, Math.random() * maxLeft);
    const newTop = Math.max(20, Math.random() * maxTop);

    setNoButtonPosition({ top: newTop, left: newLeft });
    setIsNoButtonAbsolute(true);
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  const handleContinueToMovieDate = () => {
    setShowMovieDatePage(true);
  };

  const handleNoButtonInteraction = (e: React.MouseEvent | React.TouchEvent | React.KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    moveNoButton();
  };

  // Show movie date page after celebration
  if (showMovieDatePage) {
    return <PostYesMovieDatePage />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-valentine-light via-valentine-medium to-valentine-accent">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-pattern-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Heart sticker decoration */}
      <img 
        src="/assets/generated/heart-sticker.dim_512x512.png"
        alt=""
        className="absolute top-8 right-8 w-24 h-24 opacity-80 animate-pulse"
      />
      <img 
        src="/assets/generated/heart-sticker.dim_512x512.png"
        alt=""
        className="absolute bottom-12 left-12 w-20 h-20 opacity-70 animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
        <Card className="w-full max-w-4xl bg-white/95 backdrop-blur-sm shadow-2xl border-valentine-border">
          <div className="p-8 md:p-12">
            {!accepted ? (
              <>
                {/* Question header */}
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-8">
                    <Heart className="w-20 h-20 text-valentine-primary fill-valentine-primary animate-pulse" />
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-valentine-dark mb-6 font-serif">
                    Will you be my Valentine?
                  </h1>
                  <p className="text-xl md:text-2xl text-valentine-muted">
                    Say yes and make this day special 💕
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative">
                  <Button
                    size="lg"
                    onClick={handleYesClick}
                    className="bg-valentine-primary hover:bg-valentine-primary-dark text-white font-semibold text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    <Heart className="w-5 h-5 mr-2 fill-current" />
                    Yes
                  </Button>

                  <Button
                    ref={noButtonRef}
                    size="lg"
                    variant="outline"
                    tabIndex={-1}
                    onMouseEnter={moveNoButton}
                    onMouseDown={handleNoButtonInteraction}
                    onTouchStart={handleNoButtonInteraction}
                    onClick={handleNoButtonInteraction}
                    onKeyDown={handleNoButtonInteraction}
                    className={`border-valentine-border text-valentine-muted hover:bg-valentine-light font-semibold text-xl px-12 py-6 rounded-full transition-all ${
                      isNoButtonAbsolute ? 'fixed' : ''
                    }`}
                    style={
                      isNoButtonAbsolute
                        ? {
                            top: `${noButtonPosition.top}px`,
                            left: `${noButtonPosition.left}px`,
                            zIndex: 50,
                          }
                        : {}
                    }
                  >
                    No
                  </Button>
                </div>
              </>
            ) : (
              <>
                {/* Celebration state */}
                <CelebrationOverlay />
                <div className="text-center py-12">
                  <div className="flex justify-center mb-6">
                    <Heart className="w-24 h-24 text-valentine-primary fill-valentine-primary animate-bounce" />
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold text-valentine-dark mb-6 font-serif">
                    Yay! 💕
                  </h2>
                  <p className="text-2xl text-valentine-muted mb-8">
                    You've made me the happiest person!
                  </p>
                  <p className="text-lg text-valentine-muted italic mb-8">
                    Happy Valentine's Day, my love! ❤️
                  </p>

                  {/* Continue button */}
                  <Button
                    size="lg"
                    onClick={handleContinueToMovieDate}
                    className="bg-valentine-primary hover:bg-valentine-primary-dark text-white font-semibold text-lg px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    14 Feb
                  </Button>
                </div>
              </>
            )}
          </div>
        </Card>

        {/* Footer */}
        <footer className="mt-12 text-center text-valentine-muted">
          <p className="flex items-center justify-center gap-2 text-sm">
            Built with <Heart className="w-4 h-4 fill-valentine-primary text-valentine-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                window.location.hostname
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-valentine-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs mt-2">© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
