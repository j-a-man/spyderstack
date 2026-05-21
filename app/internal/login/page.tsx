'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { NetworkBackground } from '@/components/network-background';
import { Loader2, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await signIn('credentials', {
        password,
        redirect: false,
      });

      if (res?.error) {
        setError('Invalid password');
        setLoading(false);
      } else {
        // Successful login
        router.push('/internal/taskboard');
        router.refresh();
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-background flex items-center justify-center p-4 overflow-hidden">
        {/* Fixed Background */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
            <NetworkBackground />
        </div>
        
        <div className="relative z-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="mb-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-md mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-bold tracking-widest uppercase text-foreground/80">
                        Secure Access
                    </span>
                </div>
                <h1 className="font-display text-4xl font-bold text-foreground mb-2 tracking-tighter">
                    INTERNAL <span className="text-primary">SYSTEM</span>
                </h1>
            </div>

            <Card className="bg-background/80 backdrop-blur-xl border-foreground/10 shadow-[0_20px_50px_-10px_rgba(var(--primary-rgb),0.1)]">
                <CardHeader className="space-y-1 text-center pb-8">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                        <Lock className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">Welcome Back</CardTitle>
                    <CardDescription>Enter your credential to access the taskboard</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="h-12 bg-foreground/5 border-foreground/10 focus-visible:ring-primary/50 text-lg"
                            />
                        </div>
                        {error && (
                            <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-sm text-destructive font-medium flex items-center justify-center animate-in fade-in zoom-in-95">
                                {error}
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="pt-4 pb-8">
                        <Button 
                            type="submit" 
                            className="w-full h-12 text-base rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/25 disabled:opacity-70" 
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> VERIFYING...
                                </>
                            ) : (
                                'ACCESS DASHBOARD'
                            )}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
            
            <p className="mt-8 text-center text-xs text-muted-foreground uppercase tracking-widest opacity-50">
                Protected by SpyderStack Security
            </p>
        </div>
    </main>
  );
}
