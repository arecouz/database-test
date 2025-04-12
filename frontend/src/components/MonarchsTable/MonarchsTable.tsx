import { useEffect, useState } from 'react';
import axios from 'axios';
import { Monarch } from '../../types/Monarch';

const MonarchsTable = ({ search, startDate, endDate }: { search: string; startDate: string; endDate: string }) => {
  const [monarchs, setMonarchs] = useState<Monarch[]>([]);

  useEffect(() => {
    const fetchMonarchs = async () => {
      try {
        // Build the query string
        let query = '';
        if (search) query += `name=${search}`;
        if (startDate) query += query ? `&startDate=${startDate}` : `startDate=${startDate}`;
        if (endDate) query += query ? `&endDate=${endDate}` : `endDate=${endDate}`;

        // Fetch data with the query string
        const res = await axios.get<Monarch[]>(`/api/monarchs?${query}`);
        setMonarchs(res.data);
      } catch (error) {
        console.error('Error fetching monarchs:', error);
      }
    };

    fetchMonarchs();
  }, [search, startDate, endDate]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Monarch</th>
            <th>Reign Start</th>
            <th>Reign End</th>
            <th>Parents</th>
            <th>Spouse(s)</th>
            <th>Birth</th>
            <th>Death</th>
          </tr>
        </thead>
        <tbody>
          {monarchs.map((m) => (
            <tr key={m.Monarch_ID}>
              <td>{m.Monarch}</td>
              <td>{m['Reign Start']}</td>
              <td>{m['Reign End']}</td>
              <td>{m.Parents}</td>
              <td>{m['Spouse(s)']}</td>
              <td>{m.Birth}</td>
              <td>{m.Death}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonarchsTable;
