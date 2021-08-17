import React from 'react';
import {
  StackDivider,
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Button,
  Select
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

const schema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  produce: yup.string().required(),
  cost: yup.number().required(),
  weight: yup.number().required(),
  phonenumber: yup.string().required(),
  served_by: yup.string().required()
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const onSubmit = values => {
    confirmAlert({
      title: '',
      message: 'Click confirm to submit.',
      buttons: [
        {
          label: 'Confirm',
          onClick: () => console.log(values)
        },
        {
          label: 'Cancel',
          onClick: () => onclose
        }
      ]
    });
  };

  return (
    <VStack
      // divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      marginTop={30}
      align='stretch'
      width='80%'
    >
      <FormControl isInvalid={errors?.name?.message} isRequired id='name'>
        <FormLabel>Supplier Name</FormLabel>
        <Input
          focusBorderColor='brand.800'
          name='name'
          {...register('name', { required: true })}
          placeholder='Enter supplier name'
          type='text'
        />
        <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={errors?.phonenumber?.message}
        isRequired
        id='phonenumber'
      >
        <FormLabel>Supplier Phone Number</FormLabel>
        <Input
          focusBorderColor='brand.800'
          name='phonenumber'
          {...register('phonenumber', { required: true })}
          placeholder='Enter supplier phone number'
          type='text'
        />
        <FormErrorMessage>{errors?.phonenumber?.message}</FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={errors?.location?.message}
        isRequired
        id='location'
      >
        <FormLabel>Location/BMU</FormLabel>
        <Input
          focusBorderColor='brand.800'
          name='location'
          placeholder='Enter supplier location'
          {...register('location', { required: true })}
          type='text'
        />
        <FormErrorMessage>{errors?.location?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors?.produce?.message} isRequired id='produce'>
        <FormLabel>Produce Type</FormLabel>
        <Select
          placeholder='Select...'
          name='produce'
          focusBorderColor='brand.800'
          {...register('produce', { required: true })}
        >
          <option value='Tilapia'>Tilapia</option>
          <option value='Omena'>Omena</option>
          <option value='Nile Perch'>Nile Perch</option>
          <option value='Chicken'>Chicken</option>
        </Select>

        <FormErrorMessage>{errors?.produce?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors?.cost?.message} isRequired id='cost'>
        <FormLabel>Cost Per Kg</FormLabel>
        <NumberInput min={0}>
          <NumberInputField
            placeholder='Enter cost per KG'
            focusBorderColor='brand.800'
            name='cost'
            {...register('cost', { required: true })}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>{errors?.cost?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors?.weight?.message} isRequired id='weight'>
        <FormLabel>Total Net Weight</FormLabel>
        <NumberInput min={0}>
          <NumberInputField
            placeholder='Enter total net weight'
            focusBorderColor='brand.800'
            name='weight'
            {...register('weight', { required: true })}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>{errors?.weight?.message}</FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={errors?.served_by?.message}
        isRequired
        id='served_by'
      >
        <FormLabel>Served By</FormLabel>
        <Select
          placeholder='Select...'
          name='served_by'
          focusBorderColor='brand.800'
          {...register('served_by', { required: true })}
        >
          <option value='Lawrence Nyakiamo'>Lawrence Nyakiamo</option>
          <option value='Paul Musyoka'>Paul Musyoka</option>
          <option value='Kenneth Simiyu'>Kenneth Simiyu</option>
          <option value='John Mwangi'>John Mwangi</option>
        </Select>

        <FormErrorMessage>{errors?.served_by?.message}</FormErrorMessage>
      </FormControl>
      <HStack>
        <Button
          onClick={handleSubmit(onSubmit)}
          width='50%'
          bg='brand.900'
          colorScheme='purple'
        >
          Submit
        </Button>
      </HStack>
    </VStack>
  );
};

export default Form;
