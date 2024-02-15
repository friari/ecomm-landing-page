import CountdownBox from "@/app/ui/components/Countdown/CountdownBox";

interface CountdownContainerProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  className?: string;
}

const CountdownContainer: React.FC<CountdownContainerProps> = ({
  days,
  hours,
  minutes,
  className,
}) => {
  days = Number(days);
  hours = Number(hours);
  minutes = Number(minutes);

  if (minutes == 0) {
    if (hours != 0) {
      minutes = 59;
    }
  }

  if (days < 10) {
    days = "0" + days;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return (
    <div className={className}>
      <div className="flex gap-x-7 xl:gap-x-[2.1875rem]">
        <CountdownBox num={days} unit="Days" />
        <CountdownBox num={hours} unit="Hours" />
        <CountdownBox num={minutes} unit="Minutes" />
      </div>
    </div>
  );
};

export default CountdownContainer;
