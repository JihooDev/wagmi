import './App.css';
import { getDefaultProvider } from 'ethers';
import {
  WagmiConfig,
  createClient,
  configureChains,
  chain,
  useAccount,
  useConnect,
  useEnsName
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import Profile from './component/Profile';
import UseAccount from './component/UseAccount';
import { Container, ThemeProvider } from 'react-bootstrap';





/**
 * WagmiConfig
 * WagmiConfig클라이언트는 ethers Default Provider를 사용하고 이전에 연결된 지갑에 자동으로 연결하도록 설정됩니다.
 */

/** 
 * - Wagmi 지원
 * 지갑, ENS, 계약, 거래, 서명 등의 작업을 위한 20개 이상의 후크
 * MetaMask, WalletConnect, Coinbase Wallet 및 Injected용 내장 지갑 커넥터
 * 캐싱, 중복 제거 요청, 다중 호출, 일괄 처리 및 지속성
 * 지갑, 블록 및 네트워크 변경 사항에 대한 데이터 자동 새로 고침
 * TypeScript 준비(ABI 및 EIP-712 유형 데이터에서 유형 추론)
 * 분기된 이더리움 네트워크에 대해 실행되는 테스트 스위트
 */
function App() {

  const { chains, provider, webSocketProvider } = configureChains(
    [chain.goerli, chain.polygon],
    [publicProvider()]
  )

  const client = createClient({
    autoConnect: false,
    provider,
    webSocketProvider
  })


  return (
    <ThemeProvider>
      <WagmiConfig client={client}>
        <h1>Test</h1>
        <Profile />
        <UseAccount />
      </WagmiConfig>
    </ThemeProvider>
  );
}

export default App;
