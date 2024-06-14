import React from 'react';
import { LuAlertCircle } from 'react-icons/lu';

interface ErrorMessageProps {
  error: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <>
      {error && (
        <p className="error">
          <LuAlertCircle className="icon-alert" /> {error}
        </p>
      )}
    </>
  );
};

export default ErrorMessage;
