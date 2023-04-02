import { Sidebar } from '../../widgets/sidebar';
import { Container, ContentWrapper } from './style';
import Table from '../../features/product/components/table';

const HomePage = () => {
   return (
      <Container>
         <Sidebar />
         <ContentWrapper>
            <Table />
         </ContentWrapper>
      </Container>
   );
};

export default HomePage;
