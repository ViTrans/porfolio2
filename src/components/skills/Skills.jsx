const Skills = () => {
  return (
    <div className="container my-10">
      <h3 className="heading mb-9 md:mb-14 relative pb-4 font-bold text-xl md:text-[32px] text-primary leading-normal text-left left">
        Các kỹ năng của tôi
      </h3>
      <div className="grid grid-cols-6 max-lg:gap-10 lg:gap-20 lg:px-20">
        <div className="flex flex-col items-center justify-center transition-all max-w-[67px] max-h-[67px] relative">
          <img src="html.png" alt="" className="max-h-full" />
        </div>
        <div className="flex flex-col items-center justify-center transition-all max-w-[67px] max-h-[67px] relative">
          <img src="css.png" alt="" className="max-h-full" />
        </div>
        <div className="flex flex-col items-center justify-center transition-all max-w-[67px] max-h-[67px] relative">
          <img src="javascript.png" alt="" className="max-h-full" />
        </div>
        <div className="flex flex-col items-center justify-center transition-all max-w-[67px] max-h-[67px] relative">
          <img src="react.png" alt="" className="max-h-full" />
        </div>
        <div className="flex flex-col items-center justify-center transition-all max-w-[67px] max-h-[67px] relative">
          <img src="tailwind.png" alt="" className="max-h-full" />
        </div>
        <div className="flex flex-col items-center justify-center transition-all max-w-[67px] max-h-[67px] relative">
          <img src="github.png" alt="" className="max-h-full" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
