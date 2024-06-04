import Messages from './Messages';
import MessageInput from './MessageInput';
import {TiMessages} from "react-icons/ti";
import useConversation from '../../../zustand/useConversation';
import { useEffect } from 'react';
import { AuthContext, useAuthContext } from '../../../context/AuthContext';

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation()

    useEffect(() => {
      //cleanup functon
      return () => setSelectedConversation(null)
    },[setSelectedConversation])
    
    return (
    <div className='md:min-w-[500px] flex flex-col' >
      {!selectedConversation ? (
      <NoChatSelected/> 
      ) : (
        <>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>{" "} 
            <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
        </div>
        <Messages />
        <MessageInput />
    </>
      )}
    </div>
    );
  };
  
  export default MessageContainer;

  const NoChatSelected = () => { 
    const {authUser}= useAuthContext();
    return( 
        <div className='flex items-center justify-center w-full h-full'> 
            <div className='px-4 text-center sm:text-lg md:text-xl text0gray-200 font-semibold flex flex-col items-center gap-2'> 
                <p>welcome {authUser.fullName}</p>
                <p>select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center'/>
            </div>
        </div>
    )
  }
/*const MessageContainer = () => {
  return (
    <>
    <div className="message-container" style={{ width: '250px' }}> 
        <span className='label-text'>To:</span><span className='text-gray-900 font-bold'>azrinasha</span>
    </div>

    <Messages />
    </>
  );
};

export default MessageContainer;*/

