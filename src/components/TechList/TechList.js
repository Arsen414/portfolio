import React from 'react'
import { TechListItem } from './components/TechListItem/TechListItem'
import "./TechList.css"
import designIcon from "../../Img/design.svg"
import iconDesignIcon from "../../Img/icon_design.svg"
import backHandIcon from "../../Img/back_hand.svg"
import frontHandIcon from "../../Img/front_hand.svg"
import uxIcon from "../../Img/ux.svg"
import motionIcon from "../../Img/motion.svg"




export const TechList = () => {
    return (
        <section className = "tech-list">
            <TechListItem icon={designIcon} name = "product design"/>
            <TechListItem icon={uxIcon} name = "UX/UI Design"/>
            <TechListItem icon={iconDesignIcon} name = "Icon Design"/>
            <TechListItem icon={backHandIcon} name = "Backend"/>
            <TechListItem icon={frontHandIcon} name = "Frontend"/>
            <TechListItem icon={motionIcon} name = "Motion"/>
        </section>
    )
}
