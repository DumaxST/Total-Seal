"use client"
import React, {useEffect} from 'react'

import {
    APIProvider,
    Map,
    Marker,
    useMarkerRef
} from '@vis.gl/react-google-maps';

export const MapContainer = () => {

    const [markerRef, marker] = useMarkerRef();
    
    useEffect(() => {
        if (!marker) {
          return;
        }
    
        // do something with marker instance here
      }, [marker]);

    return (
        <APIProvider apiKey="AIzaSyCLEeCSi1aL91F7BgDUtNb-BwyZeu3S-IM">
            <Map
                defaultCenter={{ lat: 25.698425, lng: -100.34507 }}
                defaultZoom={12}
                className='w-full h-full'
            >
                <Marker ref={markerRef} position={{ lat: 25.698425, lng: -100.34507 }} />
            </Map>
        </APIProvider>
    )
}
