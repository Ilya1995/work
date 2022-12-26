import { Animate } from 'react-simple-animate';

import { useVisible } from '../hooks/useVisible';

export const Home = () => {
  const [targetRef, visible] = useVisible((vi: number) => vi > 0.9);

  return (
    <div className="page home-page" ref={targetRef}>
      <Animate
        play={visible}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={1}
      >
        Home page
      </Animate>
    </div>
  );
};
