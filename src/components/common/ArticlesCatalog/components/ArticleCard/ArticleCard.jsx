import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import article from '../../../../../assets/article.jpeg';

const MOCK_ARTICLE_DESCRIPTION =
  'Lorem insum dolor sit amet. consectetur adiniscina elit. Pellentesque at ante eu ex luctus facilisis et eu risus. Proin dictum urna vitae semper malesuada. InTIlemcorner acus cog tincicunt commodo giem ayfacilisis neque id viverraglen Stamerlacus';

const ArticleCard = ({ title }) => {
  return (
    <Card sx={{ maxWidth: '375px' }}>
      <CardMedia image={article} sx={{ height: 140 }} title="article" />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          variant="h5"
        >
          {title}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {MOCK_ARTICLE_DESCRIPTION}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: 'black' }}>
          GAMING
        </Button>
        <Button size="small" sx={{ color: 'black' }}>
          WOW
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
