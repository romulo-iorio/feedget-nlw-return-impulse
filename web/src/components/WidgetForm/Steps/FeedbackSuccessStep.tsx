import React from "react";
import { CloseButton } from "../../CloseButton";

import { FeedbackType } from "..";
import successImageUrl from "../../../assets/success.svg";

interface IProps {
  handleRestartFeedback: () => void;
}

const FeedbackSuccessStep: React.FC<IProps> = ({ handleRestartFeedback }) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img
          alt="Imagem de ícone de sucesso branco com fundo verde"
          src={successImageUrl}
        />

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors buttonFocusClasses"
          onClick={handleRestartFeedback}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};

export { FeedbackSuccessStep };
