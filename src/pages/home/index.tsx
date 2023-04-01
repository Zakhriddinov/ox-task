import { Sidebar } from '../../widgets/sidebar';
import { Container, ContentWrapper } from './style';
import Header from '../../features/product/components/Header';
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
