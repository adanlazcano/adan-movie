import Movies from 'components/movies'
import { useDebounce } from 'hooks/useDebounce';

import { useSearchParams } from 'react-router-dom';

const Index = () => {
  const [query] = useSearchParams();
  const search = query.get("search");

  const debounceSearch = useDebounce(search,1500);

  return (
  
  <Movies key={debounceSearch} search={debounceSearch}/>)
};

export default Index;
