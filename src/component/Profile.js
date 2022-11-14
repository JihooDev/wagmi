import React, { useEffect } from 'react'
import {useAccount, useConnect, useEnsName} from 'wagmi'
import {InjectedConnector} from 'wagmi/connectors/injected'

/**
 * - 연동 된 지갑 주소 가져오기
 *   
 */

const Profile = () => {

  const {address, isConnected} = useAccount();
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
    connector : new InjectedConnector()
  })

  useEffect(()=>{
    console.log(ensName);
  },[])

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