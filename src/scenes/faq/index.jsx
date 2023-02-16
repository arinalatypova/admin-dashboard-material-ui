import { Box, useTheme, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Служба поддержки" subtitle="Страница вопросов и ответов" />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Вы раньше работали в сфере информационных технологий?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptatem! Maxime,
            earum. Voluptatibus ipsum beatae mollitia! Ratione iusto sapiente porro quos quibusdam
            id tempora delectus voluptatum obcaecati ab. Accusantium, cupiditate.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Если звонящий не понимает, что вы объясняете, как вы это решаете?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptatem! Maxime,
            earum. Voluptatibus ipsum beatae mollitia! Ratione iusto sapiente porro quos quibusdam
            id tempora delectus voluptatum obcaecati ab. Accusantium, cupiditate.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Можете ли вы рассказать о своем прошлом опыте в технической поддержке?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptatem! Maxime,
            earum. Voluptatibus ipsum beatae mollitia! Ratione iusto sapiente porro quos quibusdam
            id tempora delectus voluptatum obcaecati ab. Accusantium, cupiditate.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Можете ли вы описать типичный день на вашей предыдущей должности в службе поддержки?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptatem! Maxime,
            earum. Voluptatibus ipsum beatae mollitia! Ratione iusto sapiente porro quos quibusdam
            id tempora delectus voluptatum obcaecati ab. Accusantium, cupiditate.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Если клиент звонит и говорит, что его компьютер работает медленно, как бы вы решили эту
            проблему?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptatem! Maxime,
            earum. Voluptatibus ipsum beatae mollitia! Ratione iusto sapiente porro quos quibusdam
            id tempora delectus voluptatum obcaecati ab. Accusantium, cupiditate.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Если бы клиент позвонил и сказал, что столкнулся с синим экраном, что бы вы сделали?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptatem! Maxime,
            earum. Voluptatibus ipsum beatae mollitia! Ratione iusto sapiente porro quos quibusdam
            id tempora delectus voluptatum obcaecati ab. Accusantium, cupiditate.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
