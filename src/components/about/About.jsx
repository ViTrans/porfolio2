import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="container flex items-center h-full pt-8 lg:pb-24 lg:pt-16">
      <div className="flex flex-col justify-between items-center gap-x-10 md:flex-row">
        <div className="md:w-1/3 w-full">
          <img
            src="avatar.jpg"
            alt="about"
            className="w-full rounded-lg h-96 object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="mb-4 text-xl font-bold leading-normal md:text-2xl text-primary">
            <Typewriter
              words={["Giới Thiệu Về Tôi"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={() => console.log(`Done after 5 loops!`)}
            ></Typewriter>
          </h3>
          <div className="mb-6 text-sm leading-relaxed md:mb-8 md:text-lg text-gray-300">
            <p>
              Tôi tên là Trần Bảo Vĩ hiện tại đang là một sinh viên năm 4 của
              trường đại học Kỹ Thuật - Công Nghệ Cần Thơ chuyên ngành Công Nghệ
              Thông Tin. Tôi có một niềm đam mê với lập trình và tôi muốn trở
              thành một Fullstack Developer trong tương lai.
            </p>
            <p>
              Trong quá trình học tập và làm việc, tôi đã có cơ hội được làm
              việc freelance cho một số doanh nghiêp nhỏ và tôi đã có thể tự tin
              với khả năng của mình.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
