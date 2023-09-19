import { useRouter } from 'next/router';

interface InputSalvarProjetoProps {
  fieldsToCheck: string[];
  redirectTo: string;
}

const InputSalvarProjeto: React.FC<InputSalvarProjetoProps> = ({ fieldsToCheck, redirectTo }) => {
  const router = useRouter();

  const handleClick = () => {
    const areFieldsFilled = fieldsToCheck.every((fieldName) => {
      const fieldValue = (document.querySelector(`[name="${fieldName}"]`) as HTMLInputElement)?.value;
      return fieldValue && fieldValue.trim() !== '';
    });

    if (areFieldsFilled) {
      router.push(redirectTo); // Redirecionar se os campos estiverem preenchidos
    } else {
      alert('Por favor, preencha todos os campos antes de prosseguir.');
    }
  };

  return <button onClick={handleClick}>Enviar</button>;
};

export default InputSalvarProjeto;
