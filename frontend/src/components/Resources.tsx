import { useEffect, useState } from 'react';
import axios from 'axios';

const Resources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const res = await axios.get('/api/resources');
      setResources(res.data);
    };
    fetchResources();
  }, [resources]);

  return (
    <div>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id} className='p-2 border-b'>
            {resource.title} - {resource.url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
