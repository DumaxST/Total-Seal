import React from 'react'
import IcomoonReact, { iconList } from "icomoon-react";
import iconSet from "@/public/icons/selection.json";

type IconProps = {
    color?: string,
    size: string | number,
    icon: string,
    className?: string

}
export const Icon = (props: IconProps) => {
    const { color, size = "100%", icon, className = "" } = props;

    return (
      <IcomoonReact
        className={className}
        iconSet={iconSet}
        color={color}
        size={size}
        icon={icon}
      />
    );
}
