import React, { useEffect } from 'react'
import {useAccount, useConnect, useEnsName} from 'wagmi'
import {InjectedConnector} from 'wagmi/connectors/injected'
import {MetaMaskConnector} from 'wagmi/connectors/metaMask';
// import { useAccount } from 'wagmi';
/**
 * - 연동 된 지갑 주소 가져오기
 *   
 */


const Profile = () => {

  const connector = new MetaMaskConnector({
    options : {
      shimDisconnect : true
    }
  });

  const {address, isConnected, isDisconnected} = useAccount();
  const {data : ensName} = useEnsName({
    address,
    onSuccess(data) {
        console.log(data);
    },
    onError(data) {
        console.log(data)
    }
  });
  const {connect} = useConnect({
    connector : connector
  })

  useEffect(()=>{
    console.log(ensName);
  },[address])



  return (
    <div>
    {
        isConnected
        ? <div>{ensName ?? address}</div>
        : <button onClick={()=> connect()}>Connect Wallet</button>
    }
    </div>
  )
}

export default Profile