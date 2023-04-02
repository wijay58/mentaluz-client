import { Card, CardContent, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Members = () => {
  const theme = useTheme();
  const members = [
    { name: 'John Dice', email: 'johndice@gmail.com' },
    { name: 'John Dice', email: 'johndice@gmail.com' },
    { name: 'John Dice', email: 'johndice@gmail.com' },
    { name: 'John Dice', email: 'johndice@gmail.com' },
    { name: 'John Dice', email: 'johndice@gmail.com' },
  ];

  return (
    <Card sx={{ boxShadow: theme.customShadows.primary, marginY: '10px' }}>
      <CardContent sx={{ padding: '40px' }}>
        {members.map((member, index) => (
          <Grid container flexDirection='row' justifyContent="space-between">
            <>
              <Typography variant="h4" sx={{ marginTop: '10px', marginBottom: '5px' }}>
                {member.name}
              </Typography>
              <Typography variant="h5" sx={{ marginTop: '10px', marginBottom: '5px' }}>
                {member.email}
              </Typography>
            </>
          </Grid>
        ))}
      </CardContent>
    </Card>
  );
};

export default Members;
