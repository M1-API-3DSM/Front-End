'use client';

import { useEffect, createContext } from 'react';
import * as XLSX from 'xlsx';

export interface UploaderProps {
  rota: string
}

export default function UploadaerXlsx(props: UploaderProps) {
  useEffect(() => {
    const handFileUpload = (e: any) => {
      const reader = new FileReader();
      reader.readAsBinaryString(e.target.files[0]);
      reader.onload = (e) => {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet);
        console.log(parsedData);

        fetch(`${props.rota}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ parsedData }),
        })
          .then((response) => response.json())
          .then((data) => {
            
          })
          .catch((error) => {
            console.error('Erro ao enviar os dados:', error);
          });

      };
    };

    const fileInput = document.querySelector('#fileInput'); // Selecionar o elemento de entrada de arquivo
    if (fileInput) {
      fileInput.addEventListener('change', handFileUpload);
    }
  }, []);

  return (
    <input
      id="fileInput" // Adicione um ID para o elemento de entrada de arquivo
      type="file"
      accept=".xlsx, .xls"
    />
  );
}
