import { useState } from 'react';

export interface InputCaptureProps {
  rota: string;
}

export default function InputCapture(props: InputCaptureProps) {
  const [inputValue, setInputValue] = useState('');

  const handleBlur = () => {

    console.log(inputValue); 

    fetch(`${props.rota}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.error('ocorreu algo');
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados:', error);
      });
  };

  return (
    <div>
        <label>Nome do projeto: </label>
        <input
            type="text"
            onBlur={handleBlur}
            onChange={(e) => setInputValue(e.target.value)}
        />
    </div>
  );
}
