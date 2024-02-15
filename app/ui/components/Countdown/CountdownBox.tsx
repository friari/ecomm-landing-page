interface CountdownBoxProps {
  num: string | number;
  unit: string;
}

const CountdownBox: React.FC<CountdownBoxProps> = ({ num, unit }) => {
  return (
    <div className="flex aspect-square w-20 flex-col justify-center rounded-sm bg-white p-4 text-center drop-shadow-sm xl:w-[6.25rem]">
      <p className="text-xl font-semibold xl:text-[2rem]">{num}</p>
      <p className="text-sm xl:text-base">{unit}</p>
    </div>
  );
};

export default CountdownBox;
