import { Card, CardContent, Chip, Typography } from '@mui/material';

import { SampleModelHits } from '@/src/shared/types/algolia-hits';

export const HitsItem = ({ hit }) => {
  const { name, description, date, tags }: SampleModelHits = hit;

  return (
    <Card
      sx={{
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      }}
    >
      <CardContent
        className="tex"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          fontWeight: '500',
          fontSize: '20px',
        }}
      >
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="inherit" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="inherit" color="text.secondary">
          Date: {date}
        </Typography>
        <div className="flex gap-2">
          {tags &&
            tags.map(tag => (
              <Chip
                key={tag}
                label={tag}
                color="primary"
                sx={{ fontSize: '18px', fontWeight: '500', padding: '5px' }}
              />
            ))}
        </div>
      </CardContent>
    </Card>
  );
};
