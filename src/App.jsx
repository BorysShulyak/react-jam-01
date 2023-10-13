import Box from '@mui/material/Box';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ArticlesCatalog } from './components/common/ArticlesCatalog';
import { Footer, Header } from './components/layout';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Box
        sx={{
          minHeight: '100vh'
        }}
      >
        <Header />
        <Box component="main" sx={{ minHeight: '100%', bgcolor: '#e3e0d8' }}>
          <ArticlesCatalog />
        </Box>
        <Footer />
      </Box>
    </QueryClientProvider>
  );
};

export default App;
