"use client"
import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import useWebSocket from '../services/websocket';

type WebSocketContextType = {
    connectionStatus: 'connected' | 'disconnected' | 'connecting';
    handleDisconnect: () => void;
    handleOnMessage: (message: MessageEvent) => void;
};

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);


type WebSocketProviderProps = {
    children: ReactNode;
    code: string;
};

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children, code }) => {
    console.log(code)
    //const {preferences} = useUserPreferences();
    const url = `${process.env.NEXT_PUBLIC_WEBSOCKET_URL}/${code}/ws`;

    const webSocketHook = useWebSocket(url);
    
    if(code === undefined || code === null){
        return <WebSocketContext.Provider value={{ 
            connectionStatus: 'connecting', 
            handleDisconnect: webSocketHook.handleDisconnect,
            handleOnMessage: webSocketHook.handleOnMessage
        }}>
            {children}
        </WebSocketContext.Provider>
    }

    return <WebSocketContext.Provider value={{ 
        connectionStatus: webSocketHook.connectionStatus, 
        handleDisconnect: webSocketHook.handleDisconnect,
        handleOnMessage: webSocketHook.handleOnMessage
    }}>
        {children}
    </WebSocketContext.Provider>
};

export const useWebSocketContext = (): WebSocketContextType => {
    const context = useContext(WebSocketContext);
    if (!context) {
        throw new Error('useWebSocketContext debe ser usado dentro de un WebSocketProvider');
    }
    return context;
};