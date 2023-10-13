import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import * as React from 'react';

const ArticleCardSkeleton = () => {
  return (
    <Card sx={{ width: '375px' }} variant="outlined">
      <Skeleton height={140} variant="overlay" />
      <CardContent>
        <Skeleton height={32} sx={{ mb: '8px' }} variant="inline" />
        <Skeleton height={108} variant="overlay" />
      </CardContent>
      <CardActions>
        <Skeleton height={31} variant="overlay" width={65} />
        <Skeleton height={31} sx={{ ml: '8px' }} variant="overlay" width={65} />
      </CardActions>
    </Card>
  );
};

export default ArticleCardSkeleton;
