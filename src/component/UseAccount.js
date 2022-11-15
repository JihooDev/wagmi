import React, { useEffect } from 'react'
import { useAccount } from 'wagmi'

const UseAccount = () => {

    const a = useAccount();

    // return
    /**
     * 
        address?: string
        connector?: Connector
        isConnecting: boolean
        isReconnecting: boolean
        isConnected: boolean
        isDisconnected: boolean
        status: 'connecting' | 'reconnecting' | 'connected' | 'disconnected'
     */

    useEffect(() => {
        console.log(a.address); // 연동 계좌
        console.log(a.connector); // 연동 커넥터
        console.log(a.isConnected); // 연동이 되었는지
        console.log(a.isConnecting); // 연동이 진행되는중인지
        console.log(a.isDisconnected); // 연동이 안되어있는지
        console.log(a.isReconnecting); // 연동이 해제 중인지
    },[a.address])
  return (
    <div>UseAccount</div>
  )
}

export default UseAccount