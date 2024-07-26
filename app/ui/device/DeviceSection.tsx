"use client";

import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

interface Props {
  code: string;
}
export default function DeviceSection() {
  const [status, setStatus] = useState(false);

  //const [socket] = useState(connectSocketServer());

  useEffect(() => {
    const newSocket = io('wss://lite.dumaxst.com:5000', {
        transports: ['websocket'],
        path: `/api/v1/channel/098dfae960e4d398ee8dac5951532ed65513b003/ws`,
        autoConnect: false,
        forceNew: true,
        reconnection: false,
        query: {},
        extraHeaders: {
          'Sec-WebSocket-Protocol': '', // Remove WebSocket protocol header
        },
      });
  
      // Override the default URL constructor to remove Socket.IO specific params
  
      newSocket.connect();
  
      newSocket.on('connect', () => {
        console.log('Connected to WebSocket');
      });
  }, []);
  return <div>DeviceSection</div>;
}
