/* @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

type Props = {
    x: number;
    y: number;

    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    width?: number;
    height?: number;
};

const PatternNode = ({
    x,
    y,
    height = 30,
    width = 60,
    fillColor = 'transparent',
    strokeColor = 'red',
    strokeWidth = 2,
}: Props): JSX.Element => {
    const points = [
        [x - width / 2, y - height / 2],
        [x - width / 2, y + height / 2],
        [x + width / 2, y + height / 2],
        [x + width / 2, y - height / 2],
    ];
    const pointsText = points.map(p => p.join(',')).join(' ');

    /*
    const nodeProp = {
        inputPoint:[x - width/2 , y],
        outputPoint:[x + width/2 , y]
    }
    */

    return (
        <React.Fragment>
            <polygon fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} points={pointsText} />
        </React.Fragment>
    );
};

export default React.memo(PatternNode);
