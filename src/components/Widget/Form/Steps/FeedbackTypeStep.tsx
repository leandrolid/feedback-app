import bug from '../../../../assets/bug.svg';
import idea from '../../../../assets/idea.svg';
import other from '../../../../assets/other.svg';
import { WidgetCloseButton } from '../../Button/WidgetCloseButton';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    icon: {
      src: bug,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    icon: {
      src: idea,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    icon: {
      src: other,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

interface FeedbackTypeStepProps {
  // eslint-disable-next-line no-unused-vars
  chooseFeedback: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ chooseFeedback }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-lg leading-6">Deixe seu feedback!</span>
        <WidgetCloseButton />
      </header>
      <div className="flex gap-2 w-full py-8">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type="button"
            onClick={() => chooseFeedback(key as FeedbackType)}
            className="bg-zinc-800 rounded-lg w-24 py-5 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={value.icon.src} alt={value.icon.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
