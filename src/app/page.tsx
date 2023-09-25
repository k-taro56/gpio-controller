'use client';

import { useState } from 'react';
import Slider from '../components/slider';

export default function Home() {
  const [leftValue, setLeftValue] = useState(0.0);
  const [rightValue, setRightValue] = useState(0.0);

  function sendData(sliderId: string, value: number) {
    fetch('http://raspberrypi.local:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sliderId: sliderId,
        value: value,
      }),
    }).then((response) => {
      if (!response.ok) {
        console.error('Error sending data:', response.statusText);
      }
    });
  }

  return (
    <div className="dark:bg-gray-800">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center space-y-4 dark:text-white">
          <div className="flex space-x-4 w-40 h-10">
            <Slider
              value={leftValue}
              onChange={(val) => {
                setLeftValue(val);
                sendData('left', val);
              }}
            />
            <Slider
              value={rightValue}
              onChange={(val) => {
                setRightValue(val);
                sendData('right', val);
              }}
            />
          </div>
          <div className="flex items-center space-x-4">
            <span>Left: {leftValue.toFixed(1)}</span>
            <span>Right: {rightValue.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
