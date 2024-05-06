import React from 'react';
import { Icon } from "@/app/components/ui";
import { headingFont, bodySecondaryFont} from "@/app/config/fonts";

interface CardWithIconProps {
    title: string
    subtitle: string
    icon: string
}

export const CardWithIcon = ({title,subtitle, icon}: CardWithIconProps) => {

  return (
    <div className='max-with-card rounded overflow-hidden shadow-lg p-5 bg-white'>
        <div className='flex justify-between '>
            <Icon
            color=""
            size={40}
            icon={icon}
            className='rounded-full bg-primary p-1.5'
            />
            <h2 className={`heading-h2 ${headingFont.className}`}>{title}</h2>
        </div>
        <h3 className={`heading-h3 mt-10 ${bodySecondaryFont.className}`}>{subtitle}</h3>
    </div>
  )
}
