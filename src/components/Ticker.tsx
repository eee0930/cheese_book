import { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  TickerCollection,
  TickerWrap,
  tickerVariants,
} from '../styles/components/tickerStyles';

type TickerProps = {
  children: JSX.Element[];
  width: number;
};

export const Ticker = ({ children, width }: TickerProps) => {
  const imgWidth = useMemo(() => width, [width]);
  const len = useMemo(() => children.length, [children]);
  return (
    <TickerWrap>
      <AnimatePresence custom={{ imgWidth, len }}>
        <TickerCollection
          variants={tickerVariants}
          initial="initial"
          animate="animate"
          custom={{ imgWidth, len }}
        >
          {children}
          {children}
        </TickerCollection>
      </AnimatePresence>
    </TickerWrap>
  );
};
