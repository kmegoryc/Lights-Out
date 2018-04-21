import React, {Component} from 'react';

export const isGameCompleted = (lights) => {
  let row_boolean = lights.map((row) => {
    return row.every(function (el) {
      return !el;
    });
  });
  return row_boolean.every(function (el) {
    return el;
  });
}