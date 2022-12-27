import { Animate } from 'react-simple-animate';

import { useVisible } from '../hooks/useVisible';

export const Info = () => {
  const [ref, inView] = useVisible({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div className="page info-page" ref={ref}>
      <Animate
        play={inView}
        start={{
          transform: 'translateX(-100px)',
        }}
        end={{ transform: 'translateX(0px)' }}
        duration={1}
      >
        Info page
      </Animate>
    </div>
  );
};
