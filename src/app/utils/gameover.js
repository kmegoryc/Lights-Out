import React, {Component} from 'react';

export const isGameCompleted = (lights) => {
  //iterates through each row of game grid to determine if all of the lights are off
  //called each time a square is clicked

  let row_boolean = lights.map((row) => {
    return row.every(function (el) {
      return !el;
    });
  });
  return row_boolean.every(function (el) {
    return el;
  });
}