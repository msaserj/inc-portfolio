import React from 'react';
import css from "./ResumeBlock.module.scss"
import {TreeTitle} from "../TreeTitle/TreeTitle";
import {ResumeItem, ResumeItemType} from "../ResumeItem/ResumeItem";
import { Slide } from 'react-awesome-reveal';



export type ResumeBlockType = {
    resumeBlock: {
        left: leftType
        right: rightType
    }
}

type leftType = {
    years: string
    title: string
    items: Array<ResumeItemType>
}
type rightType = {
    years: string
    title: string
    items: Array<ResumeItemType>
}

export const ResumeBlock: React.FC<ResumeBlockType> = (
    {resumeBlock}
) => {
    const {left, right} = resumeBlock

    return (
        <div className={css.mainResume}>
            <div className={css.content}>

                <div className={css.columnTree}>
                    <Slide triggerOnce direction={"left"}>
                        <TreeTitle title={left.title} years={left.years}/>
                        <div className={css.tree}>
                            {left.items.map((item, key)=>
                                <ResumeItem key={key} description={item.description} rate={item.rate} title={item.title} years={item.years}/>)}
                        </div>
                    </Slide>
                </div>

                <div className={css.columnTree}>
                    <Slide triggerOnce direction={"right"}>
                        <TreeTitle title={right.title} years={right.years}/>
                        <div className={css.tree}>
                            {right.items.map((item, key)=>
                                    <ResumeItem key={key} description={item.description} rate={item.rate} title={item.title} years={item.years}/>)}
                        </div>
                    </Slide>
                </div>

            </div>
        </div>
    );
};
