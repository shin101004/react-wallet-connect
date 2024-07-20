import styled from "styled-components";
import {
  useDisconnect,
  useWalletInfo,
  useWeb3Modal,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
// component
import Title from "./atom/Title";

const ConnectPart = () => {
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address } = useWeb3ModalAccount();
  const { walletInfo } = useWalletInfo();

  const handleOpen = () => {
    try {
      open();
    } catch (e) {
      open();
    }
  };

  const handleDisconnect = () => disconnect();

  return (
    <Container>
      <div>
        <Title title="Connect" />
      </div>
      <div>
        <Address>🔥 Address :: {address ? address : "Please connect"} </Address>
      </div>

      {walletInfo && (
        <WalletInfoWrapper>
          <div>
            <img src={walletInfo.icon} />
          </div>
          <div>
            <WalletInfo>{walletInfo.name}</WalletInfo>
          </div>
        </WalletInfoWrapper>
      )}
      <ButtonWrapper>
        <Button onClick={handleOpen}>Open</Button>
        <Button onClick={handleDisconnect}>Disconnect</Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  background-color: #787da1;
  max-width: 400px;
  width: 100%;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;
  ::shadow {
    display: none;
  }
  border: none;
`;

const Address = styled.span`
  font-size: 14px;
  color: #f0f0f0;
`;

const ButtonWrapper = styled.div`
  gap: 8px;
  display: flex;
`;

const WalletInfoWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const WalletInfo = styled.span`
  font-size: 14px;
  color: #f0f0f0;
`;

export default ConnectPart;
