import { useState, useEffect, useRef } from 'react';

interface WebSocketContextType {
    connectionStatus: 'connected' | 'disconnected' | 'connecting';
    handleDisconnect: () => void;
    subscribeToMessage: (callback: (message: string) => void) => () => void ;

}


const useWebSocket = (url:string | null ): WebSocketContextType => {

    const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'connecting'>('connecting');
    const ws = useRef<WebSocket | null>(null);
    const manualDisconnect = useRef(false);
    const isReconnecting = useRef(false);
    const reconnectTimeout = useRef<NodeJS.Timeout | null>(null);
    const messageCallback = useRef< ((message: string) => void)[]>([]);

    const onMessage= (message: string) => {
        messageCallback.current.forEach(callback => callback(message));

    }
    const subscribeToMessage = (callback: (message: string) => void) => {
        messageCallback.current.push(callback);
        return () => {
            messageCallback.current = messageCallback.current.filter(cb => cb !== callback);
        }
    }

    const connect = () => {
        if (!url) return;

        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            console.log('WebSocket is already open');
            return;
        }

        ws.current = new WebSocket(url);
        ws.current.onopen = () => {
            setConnectionStatus('connected');
            manualDisconnect.current = false;
            console.log('WebSocket connected');
        };
        
        ws.current.onmessage = ( message) =>{
            console.log(message , 'message')
            onMessage(message.data)
           
        }

        ws.current.onerror = (event) => {
            setConnectionStatus('disconnected');
            console.log('WebSocket error');
        };

        ws.current.onclose = () => {
            setConnectionStatus('disconnected');
            console.log('WebSocket disconnected');
            if (!manualDisconnect.current) {
                attemptReconnect();
            } else {
                console.log('Disconnected manually. Not attempting to reconnect.');
            }
        };
    }


    useEffect(() => {
        console.log('Connecting WebSocket to:', url);
        connect();
        return () => { 
            ws.current?.close();
            if (reconnectTimeout.current) {
                clearTimeout(reconnectTimeout.current);
            }
        };
    }, [url]);

    const handleDisconnect = () => {
        console.log('Disconnecting WebSocket...');
        
        manualDisconnect.current = true;
        ws.current?.close();
        setConnectionStatus('connecting');
    }

    const attemptReconnect = () => {
        if (isReconnecting.current) return;
        if(manualDisconnect.current) return;

        isReconnecting.current = true;

        if (reconnectTimeout.current) {
            clearTimeout(reconnectTimeout.current);
        }

        console.log('Attempting to reconnect...');
        
        reconnectTimeout.current = setTimeout(() => {
            connect();
            isReconnecting.current = false;
        }, 2000);

        setConnectionStatus('connecting');
    };
    

    return { connectionStatus , handleDisconnect, subscribeToMessage };
};

export default useWebSocket;
