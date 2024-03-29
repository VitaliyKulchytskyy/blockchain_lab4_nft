import { useState } from "react";
import { ethers } from "ethers";

function WalletBalance() {
    const [balance, setBalance] = useState(0);

    const getBalance = async() => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    };

    return (
        <table class="WalletHead">
            <tr>
                <th>
                    <h2 id="head">The Cats NFT</h2>
                </th>
                <th>
                    <div class="Wallet">
                        <h2>My balance: {balance} ETH</h2>
                        <button onClick = {() => getBalance()} class="Wallet">Show my balance</button>
                    </div>
                </th>
            </tr>
        </table>
    );
}

export default WalletBalance;