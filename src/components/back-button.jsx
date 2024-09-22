import React from 'react';
import Button from './btn/btn';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type='back'
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      Back
    </Button>
  );
}
