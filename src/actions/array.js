import React, {Component} from 'react';

export const generateRandomArray = () => {
    const lights = new Array(5);
    for (var i = 0; i < lights.length; i++) {
        lights[i] = new Array(5);
        for (var j = 0; j < lights[i].length; j++) {
            lights[i][j] = Math.random() >= 0.5;
        }
    }
    return lights;    
}