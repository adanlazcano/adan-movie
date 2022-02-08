import Movies from 'components/movies'
import { useDebounce } from 'hooks/useDebounce';
import { useQuery } from 'hooks/useQuery';

const Index = () => {
  const query = useQuery();
  const search = query.get("search");

  const debounceSearch = useDebounce(search,1500);

  return (
  
  <Movies key={debounceSearch} search={debounceSearch}/>)
};

export default Index;
