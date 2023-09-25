import { ChangeEvent, FC } from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const Slider: FC<SliderProps> = ({ value, onChange }) => {
  return (
    <input
      type="range"
      min="-100"
      max="100"
      value={value}
      className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-blue-700 transform -rotate-90"
      step="0.1"
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(Number(e.target.value))}
    />
  );
};

export default Slider;
