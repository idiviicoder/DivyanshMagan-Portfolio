import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-card text-card-foreground border border-border shadow-lift text-sm font-medium"
          >
            {toast.type === 'success' && (
              <CheckCircle2 className="w-5 h-5 text-accent-emerald shrink-0" />
            )}
            {toast.type === 'error' && (
              <AlertCircle className="w-5 h-5 text-accent-rose shrink-0" />
            )}
            {toast.type === 'info' && (
              <Info className="w-5 h-5 text-accent-cyan shrink-0" />
            )}
            <span className="text-foreground">{toast.message}</span>
            <button
              onClick={() => onDismiss(toast.id)}
              className="ml-2 text-muted-foreground hover:text-foreground transition-colors p-0.5 rounded-lg"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
