import { Animate } from 'react-simple-animate';

import { useVisible } from '../hooks/useVisible';

export const Info = () => {
  const [targetRef, visible] = useVisible((vi: number) => vi > 0.1);
  console.log(visible);

  return (
    <div className="page info-page" ref={targetRef}>
      <Animate
        play={visible}
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
