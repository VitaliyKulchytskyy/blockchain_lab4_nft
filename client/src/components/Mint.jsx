import {useEffect, useState} from 'react';
import { ethers } from 'ethers';
import abi from './Test.json';
import WalletBalance from "./WalletBalance";

const contractABI = abi.abi;
const contractAdress = '0x4058e8B57AD15f62E3fd2C6B6Fff61767d488A64';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const contract = new ethers.Contract(contractAdress, contractABI, signer);
console.log(provider.getCode(contractAdress));

function Mint() {
    const [totalMinted, setTotalMinted] = useState(0);
    useEffect(() => {
      getCount();
    }, []);
  
    const getCount = async () => {
        const count = await contract.count();
        setTotalMinted(parseInt(count));
    };
  
    return (
      <div>
          <WalletBalance />
  
          {Array(totalMinted + 1)
          .fill(0)
          .map((_, i) => (
              <div key={i} class="NFTContainer">
                <NFTImage tokenId={i} getCount={getCount} />
              </div>
          ))}
      </div>
    );
};

function NFTImage({ tokenId, getCount }) {
    const contentId = 'Qme9feZ9f2jQPE5krwfowuEgxiEYk9no5FHP3CmbvRmDEu';
    const metadataURI = `${contentId}/${tokenId}.json`;
    const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.jpg`;
  
    const [isMinted, setIsMinted] = useState(false);
    useEffect(() => {
      getMintedStatus();
    }, [isMinted]);
  
    const getMintedStatus = async () => {
      const result = await contract.isContentOwned(metadataURI);
      console.log(result)
      setIsMinted(result);
    };
  
    const mintToken = async () => {
      const connection = contract.connect(signer);
      const addr = connection.address;
      const result = await contract.payToMint(addr, metadataURI, {
        value: ethers.utils.parseEther('0.01'),
      });
  
      await result.wait();
      getMintedStatus();
      getCount();
    };
  
    async function getURI() {
      const uri = await contract.tokenURI(tokenId);
      alert(uri);
    }
    return (
      <div class="NFT">
        <img class="NFT" src={isMinted ? imageURI : "https://static8.depositphotos.com/1001599/949/v/600/depositphotos_9495643-stock-illustration-question-mark.jpg"} />
          <h5>ID #{tokenId}</h5>
          {!isMinted ? (
            <button onClick={mintToken} class="NFT">
              Mint
            </button>
          ) : (
            <button onClick={getURI} class="NFT">
              Taken! Show URI
            </button>
          )}
      </div>
    );
  }

export default Mint;