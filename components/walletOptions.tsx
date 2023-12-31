import { useEffect, useRef } from 'react'
import { useConnect, useAccount } from 'wagmi'
import { IoClose } from 'react-icons/io5'
import { useModalStore } from '@/utils/State/modalstore'
import { useModalCloseHandler } from '@/utils/hooks/useModalClose'

export function WalletOptions() {
  const { walletOptionsVisible, toggleWalletOptionsVisible } = useModalStore(
    (state) => ({
      walletOptionsVisible: state.walletOptionsVisible,
      toggleWalletOptionsVisible: state.toggleWalletOptionsVisible,
    })
  )
  const { isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

  useEffect(() => {
    if (isConnected) {
      toggleWalletOptionsVisible()
    }
  }, [isConnected, toggleWalletOptionsVisible])

  // Ref to the specific div with the class you want
  const modalWrapperRef = useRef(null)

  // Uses useModalCloseHandler hook to create event where modal view is closed if clicked outside of the specified div.
  const handleModalClose = useModalCloseHandler(
    toggleWalletOptionsVisible,
    modalWrapperRef
  )

  return (
    <div
      onClick={handleModalClose}
      className='absolute flex h-full w-full items-center justify-center bg-background/90'
    >
      <div
        ref={modalWrapperRef}
        className='inset-0 mx-auto my-auto h-min w-[300px] border border-foreground bg-foreground text-background'
      >
        <div className='flex w-full items-center justify-between p-2'>
          Select Wallet
          <IoClose
            onClick={toggleWalletOptionsVisible}
            className='cursor-pointer duration-200 hover:text-accent'
          />
        </div>
        {connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
            className='h-12 w-full border-b border-foreground bg-background/90 text-foreground duration-200 hover:bg-background hover:text-accent'
          >
            {connector.name}
          </button>
        ))}
      </div>
    </div>
  )
}
