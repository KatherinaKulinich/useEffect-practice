import { useEffect, useState } from 'react';

interface TimerProps {
    secondsNumber: number;
    onChangeSeconds: (actualSeconds: number) => void;
    timerKey: number;
}

const Timer: React.FC<TimerProps> = ({ secondsNumber, onChangeSeconds, timerKey }) => {
    const [seconds, setSeconds] = useState<number>(secondsNumber);

    useEffect(() => {
        setSeconds(secondsNumber)
    }, [secondsNumber])

    useEffect(() => {
        onChangeSeconds(seconds);
    }, [seconds]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSec) => prevSec - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timerKey]);

    return <div className='px-3 py-2 rounded border'>{seconds}</div>;
};

export default Timer;
