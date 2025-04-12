import { useState } from 'react';
import Heading from '../components/Heading';
import MonarchsTable from '../components/MonarchsTable/MonarchsTable';
import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider';

const SupaBaseMonarchs = () => {
  const [search, setSearch] = useState('');
  const [minValue, setMinValue] = useState(1066);
  const [maxValue, setMaxValue] = useState(2025);
  return (
    <div>
      <Heading />
      <SearchBar search={search} setSearch={setSearch} />
      <Slider
        minValue={minValue}
        maxValue={maxValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
      />
      <MonarchsTable
        search={search}
        startDate={String(minValue)}
        endDate={String(maxValue)}
      />
    </div>
  );
};

export default SupaBaseMonarchs;
