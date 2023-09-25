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
  const imgWidth = width;
  const len = children.length;
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

export const OneTicker = ({ children, width }: TickerProps) => {
  const imgWidth = width;
  const len = children.length;
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
