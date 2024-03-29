import Mint from "./components/Mint";

function getImgByToken(tokenId) {
  const contentId = 'Qme9feZ9f2jQPE5krwfowuEgxiEYk9no5FHP3CmbvRmDEu';
  const metadataURI = `${contentId}/${tokenId}.json`;
  const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.jpg`;

  return imageURI;
}
// There been to many request for this content in a short period of time.
// Solving: open IPFS for hosting files
// https://gateway.pinata.cloud/ipfs/Qme9feZ9f2jQPE5krwfowuEgxiEYk9no5FHP3CmbvRmDEu/0.jpg

const App = () => {
  return (
    <div className="App">
      <Mint />
    </div>
  )
}

export default App