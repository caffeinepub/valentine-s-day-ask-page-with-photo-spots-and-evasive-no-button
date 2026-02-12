import { Heart, Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PostYesMovieDatePage() {
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
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <Heart className="w-16 h-16 text-valentine-primary fill-valentine-primary animate-pulse" />
            </div>
            <CardTitle className="text-4xl md:text-5xl font-bold text-valentine-dark font-serif">
              It's a Date! 🎬
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Movie poster */}
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <img
                    src="/assets/generated/hum-aapke-hain-koun-poster.dim_800x1200.png"
                    alt="Hum Aapke Hain Koun movie poster"
                    className="w-full h-auto rounded-lg shadow-xl border-4 border-valentine-border"
                  />
                </div>
              </div>

              {/* Movie details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-valentine-dark mb-2 font-serif">
                    Hum Aapke Hain Koun
                  </h2>
                  <p className="text-lg text-valentine-muted italic">
                    A classic love story for us to enjoy together
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-valentine-light/50 p-4 rounded-lg">
                    <Calendar className="w-6 h-6 text-valentine-primary" />
                    <div>
                      <p className="text-sm text-valentine-muted font-medium">Date</p>
                      <p className="text-xl font-bold text-valentine-dark">14 Feb</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-valentine-light/50 p-4 rounded-lg">
                    <Clock className="w-6 h-6 text-valentine-primary" />
                    <div>
                      <p className="text-sm text-valentine-muted font-medium">Time</p>
                      <p className="text-xl font-bold text-valentine-dark">9:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-valentine-light/50 p-4 rounded-lg">
                    <Heart className="w-6 h-6 text-valentine-primary" />
                    <div>
                      <p className="text-sm text-valentine-muted font-medium">Who's Coming</p>
                      <p className="text-xl font-bold text-valentine-dark">Just me and you</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-valentine-primary/10 to-valentine-accent/10 rounded-lg border-2 border-valentine-primary/20">
                  <p className="text-center text-lg text-valentine-dark font-medium">
                    Can't wait to spend this special evening with you! 💕
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
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
