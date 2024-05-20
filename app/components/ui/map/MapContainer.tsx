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
        <APIProvider apiKey={`${process.env.MAP_KEY}`}>
            <Map
                defaultCenter={{ lat: 25.698425, lng: -100.34507 }}
                defaultZoom={12}
                className='w-full h-96'
            >
                <Marker ref={markerRef} position={{ lat: 25.698425, lng: -100.34507 }} />
            </Map>
        </APIProvider>
    )
}
