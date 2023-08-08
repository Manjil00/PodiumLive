import { useContext } from 'react'

export const useRoomsContext = () => {
  const context = useContext(RoomssContext)

  if (!context) {
    throw Error('useRoomsContext must be used inside an RoomsContextProvider')
  }

  return context
}