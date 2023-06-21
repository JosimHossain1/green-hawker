import Image from "next/image";
import member1 from "../Assets/team/member1.png";
import member2 from "../Assets/team/member2.jpg";
import member3 from "../Assets/team/member3.png";
import botttomLine from "../Assets/bottomLine.png";
const Team = () => {
  return (
    <div>
      <div className="py-10 bg-gray-50 mb-10">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16 text-center">
            <h3 className="text-[#209C5E] font-semibold text-2xl">OUR TEAM </h3>
            <Image
              src={botttomLine}
              alt="Bottom Line"
              className="mx-auto -mt-4"
            />
            <p className="text-gray-500 poppins mt-4">
              Most talented Green Hawker team members want to change the world.
              They want clean and fresh city also a green environment.
            </p>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-3">
            <div className="space-y-4 text-center">
              <Image
                className="mx-auto object-cover rounded-xl w-64 h-[21rem]"
                src={member1}
                alt="woman"
                loading="lazy"
              />
              <div>
                <h4 className="text-xl font-semibold">Josim Hawladar</h4>
                <span className="block text-sm text-gray-500">Co-Founder</span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <Image
                className="mx-auto object-cover rounded-xl w-64 h-[21rem]"
                src={member2}
                alt="woman"
                loading="lazy"
              />
              <div>
                <h4 className="text-xl font-semibold">Josim Hawladar</h4>
                <span className="block text-sm text-gray-500">Co-Founder</span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <Image
                className="mx-auto object-cover rounded-xl w-64 h-[21rem]"
                src={member3}
                alt="woman"
                loading="lazy"
              />
              <div>
                <h4 className="text-xl font-semibold">Josim Hawladar</h4>
                <span className="block text-sm text-gray-500">Co-Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
