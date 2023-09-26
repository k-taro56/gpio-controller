import { ChangeEvent, FC } from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const Slider: FC<SliderProps> = ({ value, onChange }) => {
  const position = 100 - (value + 100) / 2;

  return (
    <div className="relative w-1/2 h-full">
      <div className="track absolute h-full w-1 bg-gray-300 left-1/2 transform -translate-x-1/2"></div>
      {0 <= value ? (
        <div
          className="highlight absolute w-1 bg-green-500 left-1/2 transform -translate-x-1/2"
          style={{
            top: `${position}%`,
            bottom: '50%',
          }}
        ></div>
      ) : (
        <div
          className="highlight absolute w-1 bg-red-500 left-1/2 transform -translate-x-1/2 translate-y-full"
          style={{
            top: `${50 + value / 2}%`,
            bottom: '50%',
          }}
        ></div>
      )}
      <div
        className="thumb absolute w-4 h-4 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ top: `calc(${position}% - 0.5rem)` }}
      ></div>
      <input
        type="range"
        min="-100"
        max="100"
        value={value}
        className="absolute h-full w-full input-range opacity-0 cursor: pointer;"
        step="0.1"
        style={{
          appearance: 'slider-vertical' as any,
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

export default Slider;
