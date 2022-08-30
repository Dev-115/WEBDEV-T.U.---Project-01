import { Box, Button, Title } from '@mantine/core';
import appointmentStep1 from './appointmentStep1';
import appointmentStep2 from './appointmentStep2';
import appointmentStep3 from './appointmentStep3';
const boxStyle = {
    width: '70%',
    margin: '1rem auto',
    textAlign: 'center',
    padding: '1rem 0',
  };
function MultiStepForm() {
    const [page, setPage] = useState(0);
    return (
      <Box
        sx={boxStyle}
      >
        <Title
          sx={{
            textAlign: 'center',
          }}
          order={2}
        >
          Hey there!
        </Title>
          {/* Steps */}
        <Button>Submit</Button>
      </Box>
    );
  }
  export default MultiStepForm;