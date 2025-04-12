interface RangeSliderProps {
  minValue: number;
  maxValue: number;
  setMinValue: React.Dispatch<React.SetStateAction<number>>;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
}

const RangeSlider = ({
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}: RangeSliderProps) => {
  const MIN_VALUE = 1066;
  const MAX_VALUE = 2025;

  const handleMinValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinValue = Number(event.target.value);
    if (newMinValue < maxValue) {
      setMinValue(newMinValue);
    }
  };

  const handleMaxValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Number(event.target.value);
    if (newMaxValue > minValue) {
      setMaxValue(newMaxValue);
    }
  };

  return (
    <div>
      <div>
        <label>From (year): {minValue}</label>
        <input
          type="range"
          min={MIN_VALUE}
          max={MAX_VALUE}
          value={minValue}
          onChange={handleMinValueChange}
        />
      </div>

      <div>
        <label>To (year): {maxValue}</label>
        <input
          type="range"
          min={MIN_VALUE}
          max={MAX_VALUE}
          value={maxValue}
          onChange={handleMaxValueChange}
        />
      </div>

      <p>
        Range: {minValue} - {maxValue}
      </p>
    </div>
  );
};

export default RangeSlider;
