import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Home, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto">
          <Sun className="w-10 h-10 animate-spin-slow" />
        </div>

        <span className="text-sm font-black text-amber-600 uppercase tracking-widest block">
          404 Error
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          The page you are looking for might have been moved, renamed, or is temporarily out of service.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
          >
            Back to Home
          </Button>

          <Button
            to="/calculators"
            variant="outline"
            size="md"
          >
            Browse Calculators
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
