import { useState } from "react";

import { WidgetContent } from "./WidgetFormContent";
import thoughtImageUrl from "../../assets/thought.svg";
import ideaImageUrl from "../../assets/idea.svg";
import bugImageUrl from "../../assets/bug.svg";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

interface ILink {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<ILink> = ({ href, children }) => (
  <a
    className="underline underline-offset-2"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export type FeedbackType = keyof typeof feedbackTypes;

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <WidgetContent
        setFeedbackType={setFeedbackType}
        setFeedbackSent={setFeedbackSent}
        feedbackType={feedbackType}
        feedbackSent={feedbackSent}
      />

      <footer className="text-xs text-neutral-400">
        Feito com ❤ por{" "}
        <Link href="https://github.com/romulo-iorio">Rômulo Iorio</Link> +{" "}
        <Link href="https://rocketseat.com.br">Rocketseat</Link>
      </footer>
    </div>
  );
};

export { WidgetForm };
