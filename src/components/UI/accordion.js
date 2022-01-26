import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from './Button';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0rem' }} />}
    {...props}
  />
))
  (({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="accordion-main" >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography className={props.className} style={{ display: "flex", alignItems: "center" }}> <img src={props.accordion_head_img} style={{ marginRight: "15px" }} />{props.head_content}</Typography>
      </AccordionSummary>
      <AccordionDetails >
        <Typography variant='h6' style={{ fontSize: "16px", fontWeight: "600" }}>  {props.accordion_body_heading}</Typography>
        <Typography style={{ marginBottom: "15px", marginTop: "15px", fontSize: "16px" }}>  {props.accordion_body_content}</Typography>
        <Button type="button" className="button-primary">Es mi perfil</Button>
      </AccordionDetails>
    </Accordion>

    
    </div >
  );
}
