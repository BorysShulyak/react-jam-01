import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import * as React from 'react';

const CommentForm = ({ articles }) => {
  const [comment, setComment] = React.useState('');
  const [articleId, setArticleId] = React.useState();

  const handleArticleChange = (e) => {
    setArticleId(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleFormSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      console.log({
        by: 'Frontend Engineer',
        parent: articleId,
        text: comment,
        time: new Date().toLocaleString(),
        type: 'comment'
      });
    },
    [articleId, comment]
  );
  return (
    <Grid container component="form" spacing={2} sx={{ width: '100%' }} onSubmit={handleFormSubmit}>
      <Grid item lg={4} md={6} xs={12}>
        <TextField
          select
          helperText="Please select the article"
          id="article-field"
          label="Article"
          sx={{ width: '100%' }}
          onChange={handleArticleChange}
        >
          <MenuItem value={0}>None</MenuItem>
          {articles?.map((article) => (
            <MenuItem key={article.id} value={article.id}>
              {article.title}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item lg={4} md={3} xs={12}>
        <TextField
          id="comment-field"
          label="Comment"
          sx={{ width: '100%' }}
          value={comment}
          onChange={handleCommentChange}
        />
      </Grid>
      <Grid item lg={4} md={3} xs={12}>
        <Button size="large" sx={{ width: '100%' }} type="submit" variant="contained">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default CommentForm;
