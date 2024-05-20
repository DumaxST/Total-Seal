"use client"
import React from 'react'
import { headingFont } from "@/app/config/fonts";
import { Icon, Button } from "@/app/components/ui";

import Link from "next/link";

interface HeaderSectionProps {
    title: string
    showIcon: boolean
    icon?: string
    textButton: string
    link: string
}


export const HeaderSection = (props: HeaderSectionProps) => {
   
    const { title, showIcon, icon = '', textButton, link } = props
  
    return (
        <div className="flex flex-row justify-between mb-5">
            <div className="flex flex-row gap-5">
                <h2 className={`heading-h2 ${headingFont.className}`}>{title}</h2>
                {
                    showIcon && 
                        <Icon
                            color=""
                            size={30}
                            icon={icon}
                            className={`bg-primary  rounded p-1.5`}
                        />
                    
                }
                    
                
                
            </div>
            <Link href={link}>
                <Button text={textButton} />
            </Link>
        </div>
    )
}

