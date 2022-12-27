import { Animate } from 'react-simple-animate';

import { useVisible } from '../hooks/useVisible';

export const Home = () => {
  const [ref, inView] = useVisible({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div className="page home-page" ref={ref}>
      <Animate
        play={inView}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={1}
      >
        Home page
      </Animate>
    </div>
  );
};
