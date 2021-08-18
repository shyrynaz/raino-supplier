import DatePicker from 'react-datepicker';
import { chakra } from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
const StyledaDatepicker = chakra(DatePicker);

export const Datepicker = props => (
  <StyledaDatepicker
    w='100%'
    border='1px solid #DFE3E8'
    borderRadius='md'
    selected={props.startDate}
    onChange={date => props.setStartDate(date)}
    padding='1.5'
    focusBorderColor='brand.800'
    {...props}
  />
);
