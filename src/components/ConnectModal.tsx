import React from 'react';
import { useConnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function ConnectModal({ isOpen, onClose }: Props) {
  const { connect } = useConnect();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="pixel-border bg-indigo-950 p-6 max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 arcade-text text-pink-500">
          CONNECT WALLET
        </h2>
        
        <button
          onClick={() => {
            connect({ connector: injected() });
            onClose();
          }}
          className="w-full pixel-border bg-indigo-900 hover:bg-indigo-800 p-4 text-center transition-colors"
        >
          <span className="text-sm md:text-base">Connect MetaMask</span>
        </button>
      </div>
    </div>
  );
}