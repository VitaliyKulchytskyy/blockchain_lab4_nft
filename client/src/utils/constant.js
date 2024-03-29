import { ethers } from 'ethers';
import abi from './Test.json';

const contractABI = abi.abi;
const contractAdress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

export const contract = new ethers.Contract(contractAdress, contractABI, signer);