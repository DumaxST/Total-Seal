"use client"
import React, { useEffect, useState } from 'react';

interface Device {
  id: string;
  name: string;
  status: string;
}
interface DeviceProps {
    imei: string
    code: string
}

export const DetailDevice = ({imei,code}:DeviceProps) =>{
    console.log(code);

    const [device, setDevice] = useState<Device>( {id: '', name: '', status: ''});

    useEffect(() => {
        // Create WebSocket connection
        const socket = new WebSocket(`${process.env.NEXT_PUBLIC_WEBSOCKET_URL}/${code}/ws`);
        console.log(socket)
        // Clean up the socket on component unmount
        // Connection opened
        socket.addEventListener('open', (event) => {
            console.log('Connected to WebSocket');
        });
      }, []);
    return(
            <h2>Hols</h2>
    )
}