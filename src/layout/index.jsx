import Header from './header';
import Content from './content';


const Index = ({children}) => {
  return (
    <>  
    <Header/>
<Content>{children}</Content>
    </>
  )
};

export default Index;
