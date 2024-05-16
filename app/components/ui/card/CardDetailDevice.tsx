import React from 'react'

import { Icon } from "@/app/components/ui";

import { headingFont, bodySecondaryFont } from "@/app/config/fonts";

import styles from './cardDetails.module.css';

interface Status {
    status: "open" | "close" | "withContent" | "empty"
}

interface CardDetailDeviceProps {
    title: string
    numberCard: string
    status: string
    type: string
}

export const CardDetailDevice = ({ title, numberCard, status, type }: CardDetailDeviceProps) => {

    const handleStatus = (status: string) => {
        switch (status) {
            case 'open':
                return { statusLabel: 'Abierto', icon: 'unlocked' }
            case 'close':
                return { statusLabel: 'Cerrado', icon: 'locked' }
            case 'with_content':
                return { statusLabel: 'Con producto', icon: 'pipe-filled' }
            case 'empty':
                return { statusLabel: 'Sin contenido', icon: 'pipe-empty' }
            default:
                return { statusLabel: 'Desconocido', icon: 'locked' }
        }
    }
    const handleColor = (type: string) => {
        switch (type) {
            case 'boxPrimary':
                return {boxStyle :styles.boxPrimary, buttonStyle: styles.buttonPrimary, buttonColor: '#970000'}
            case 'boxSecondary':
                return {boxStyle  :styles.boxSecondary , buttonStyle:styles.buttonSecondary , buttonColor: '#005D14'}
            case 'boxTertiary':
                return {boxStyle :styles.boxTertiary, buttonStyle: styles.buttonTertiary,  buttonColor: '#001863'}
            default:
               return {boxStyle :styles.boxPrimary, buttonStyle: styles.buttonPrimary, buttonColor: '#970000'}
 
        }
    }
    const { statusLabel, icon } = handleStatus(status);
    const {boxStyle, buttonStyle, buttonColor} = handleColor(type);

    return (
        <div className={`${boxStyle} rounded-lg py-4 ps-4 pe-4  ${styles.colorPrimary}`}>
            <div className='flex  gap-3'>
                <p className={` ${headingFont.className} text-sm underline underline-offset-4`}>{numberCard}</p>
                <h2 className={`text-sm ${headingFont.className}`}>{title}</h2>
            </div>

            <div className={`max-h-8 rounded-2xl border-0  py-2 px-6  focus:ring-4 focus:outline-none  text-sm  text-center inline-flex items-center mt-3.5  
             ${buttonStyle} ${bodySecondaryFont.className}`}>


                <Icon
                    color={`${buttonColor}`}
                    size={30}
                    icon={icon}
                    className='pr-1.5'
                />

                {statusLabel}
            </div>

        </div>
    )
}

