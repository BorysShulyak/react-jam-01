import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ArticleCard, ArticleCardSkeleton } from './components/ArticleCard';
import { CommentForm } from './components/CommentForm';
import { useArticles } from './hooks';

const ArticlesCatalog = () => {
  const { isLoading, data } = useArticles();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: '12px 24px', md: '24px 48px', xl: '48px 64px' }
      }}
    >
      <Typography
        component="h1"
        sx={{ pb: { xs: '12px', sm: '16px', md: '24px', xl: '32px' }, color: '#818740' }}
        variant="h3"
      >
        NEWS
      </Typography>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mb: '24px' }}>
        {isLoading &&
          [...Array(9)].map((_, index) => (
            <Grid
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              item
              md={4}
              sm={6}
              sx={{ display: 'flex', justifyContent: 'center' }}
              xs={12}
            >
              <ArticleCardSkeleton />
            </Grid>
          ))}

        {data?.map((articleData) => (
          <Grid
            key={articleData.id}
            item
            md={4}
            sm={6}
            sx={{ display: 'flex', justifyContent: 'center' }}
            xs={12}
          >
            <ArticleCard title={articleData.title} />
          </Grid>
        ))}
      </Grid>
      <CommentForm articles={data} />
    </Box>
  );
};

export default ArticlesCatalog;
