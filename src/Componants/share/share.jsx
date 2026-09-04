import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faWhatsapp,faFacebook,faTwitter } from "@fortawesome/free-brands-svg-icons";
import {faShareNodes} from '@fortawesome/free-solid-svg-icons'
function Share({Location}) {
const shareRoom =async () => {    
   await navigator.share({
    url:window.location.href,
  });
};


return (
    <div className='relative flex flex-col gap-2'>
        <FontAwesomeIcon icon={faShareNodes} onClick={() => {shareRoom()}} className='text-[#2E5BFF] cursor-pointer'  />
    </div>
  )
}

export default Share