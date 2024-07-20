import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
import styled from "styled-components";
import ConnectPart from "./component/ConnectPart";
import { RECOMMEND_WALLET_IDS } from "./wallet";

// 1. Your WalletConnect Cloud project ID
const projectId = process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID;

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// 3. Create a metadata object
const metadata = {
  name: "NEPTO_DEV",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  includeWalletIds: RECOMMEND_WALLET_IDS,
});

export default function App() {
  return (
    <Container>
      <ConnectPart />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: #f0f0f0;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
`;
