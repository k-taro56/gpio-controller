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
    <div className="flex justify-center items-center h-screen dark:bg-gray-800">
      <div className="flex flex-col items-center space-y-4 dark:text-white h-full w-96 p-8">
        <div className="flex h-full w-full">
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
        <div className="flex w-full">
          <div className="flex w-1/2 justify-center">
            <div className="mr-1">Left:</div>
            <div>{leftValue.toFixed(1)}</div>
          </div>
          <div className="flex w-1/2 justify-center">
            <div className="mr-1">Right:</div>
            <div>{rightValue.toFixed(1)}</div>
          </div>
        </div>
        <button
          className="w-full bg-blue-400 rounded-lg"
          onClick={() => {
            setLeftValue(0.0);
            setRightValue(0.0);
            sendData('left', 0.0);
            sendData('right', 0.0);
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
}
