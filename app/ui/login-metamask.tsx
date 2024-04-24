// create a sign in with metamask button
'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useState } from "react";
import { useCallback } from "react";
import { ethers } from "ethers";

export default function MetamaskLogin() {
    const [signerAddress, setSignerAddress] = useState("");
    const [signerBalance, setSignerBalance] = useState("");

    const handleMetamaskLogin = useCallback(async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        // set states
        setSignerAddress(await signer.getAddress());
    
        const balance = await signer.getBalance();
        const humanReadableBalance = ethers.utils.formatEther(balance);
        setSignerBalance(humanReadableBalance);
        console.log("Signer address", await signer.getAddress());
        console.log("Signer balance", humanReadableBalance);
      }, []);

    return(
        <button
        onClick={handleMetamaskLogin}>
            Sign in with Metamask
        </button>
    
    );
}

