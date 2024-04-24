import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(
    "https://rpc1.aries.axiomesh.io"
);

(async () => {
    console.log("Current block number", await provider.getBlockNumber());
})();

