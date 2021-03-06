import React from 'react';
import * as classes from './header.styles';
// Material UI ~ components
import TextField from '@material-ui/core/TextField';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

interface Props {
  currentTrainerUrl: string;
  currentStudentUrl: string;
}

export const HeaderComponent: React.FC<Props> = props => {
  const { currentStudentUrl, currentTrainerUrl } = props;
  const { headerContainer } = classes;

  return (
    <div className={headerContainer}>
      <CopyFieldComponent
        labelName="Trainer Link"
        inputId="trainer-link"
        urlLink={currentTrainerUrl ?? ''}
      />
      <CopyFieldComponent
        labelName="Students Link"
        inputId="student-link"
        urlLink={currentStudentUrl ?? ''}
      />
    </div>
  );
};

// CopyField Component - - - - - - - - - - - - - - -

interface CopyFieldProps {
  labelName: string;
  inputId: string;
  urlLink: string;
}

export const CopyFieldComponent: React.FC<CopyFieldProps> = props => {
  const { labelName, inputId, urlLink } = props;
  const {
    inputField,
    label,
    inputIconContainer,
    textArea,
    copyIcon,
    copyBtn,
  } = classes;
  return (
    <div className={inputField}>
      <label className={label} htmlFor={inputId}>
        {labelName}
      </label>
      <div className={inputIconContainer}>
        <input
          id={inputId}
          type="text"
          className={textArea}
          value={urlLink}
          readOnly
          aria-readonly
        />
        <button
          aria-label={`copy ${labelName}`}
          className={copyBtn}
          onClick={() => navigator.clipboard.writeText(urlLink)}
        >
          <FileCopyOutlinedIcon className={copyIcon} />
        </button>
      </div>
    </div>
  );
};
