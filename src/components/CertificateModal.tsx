import { X } from 'lucide-react';
import { useEffect } from 'react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}

export default function CertificateModal({ isOpen, onClose, imageSrc, title }: CertificateModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-navy-dark hover:text-ocean-primary transition-colors bg-white rounded-full p-2 shadow-lg"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <div className="p-8">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
