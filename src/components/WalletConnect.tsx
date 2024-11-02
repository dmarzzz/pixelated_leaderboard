import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { UserCircle2 } from 'lucide-react';

export function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <button
        onClick={() => disconnect()}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-950 hover:bg-indigo-900 transition-colors rounded pixel-border"
      >
        <UserCircle2 className="w-5 h-5" />
        <span className="text-xs md:text-sm truncate max-w-[100px]">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
      </button>
    );
  }

  return null;
}