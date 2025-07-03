import img2 from "../Assets/MobileLogos.png";
import img3 from "../Assets/mobileLogo1.png";
import img4 from "../Assets/mobileLogo2.png";
import img5 from "../Assets/mobileLogo3.png";
import { cardData3 } from "../Data/Data.js";


function AboutUs({ data = cardData3 }) {
  return (
    <main>
      <section className="flex w-full flex-col items-start gap-10 pt-36 pb-14 lg:px-0 md:px-8 px-4 bg-[#FCFCFC] dark:bg-[#100108]">
        {/* About Section */}
        <header className="hidden lg:block">
          {/* <Hero showButton = {false}/> */}
          <h1 className="lg:flex justify-center items-center self-stretch text-3xl font-bold font-inter px-14 ">
            About
          </h1>
        </header>
        {data.map((card, index) => (
          <article
            key={card.id || card.title || index}
            className={`flex flex-col md:flex-row md:py-[3.5rem] lg:p-14 items-start self-stretch gap-10 justify-between
            ${index % 2 !== 0 ? "min-[768px]:flex-row-reverse" : ""}`}
            aria-labelledby={`about-section-title-${index}`}
          >
            <picture>
              <source
                srcSet={`/optimized/${card.image.replace(/\.\w+$/, ".avif")}`}
                type="image/avif"
              />
              <source
                srcSet={`/optimized/${card.image.replace(/\.\w+$/, ".webp")}`}
                type="image/webp"
              />
              <img
                className="flex self-center h-[404px] flex-1 rounded-[1rem] border-[#FCFCFC] border-[0.1875rem]"
                src={`/optimized/${card.image}`}
                alt={card.title ? card.title : "About section image"}
              />
            </picture>
            <div className="flex flex-col flex-1 items-start self-stretch py-[1.25rem]">
              <h2
                className="font-inter text-[1.25rem] font-[700] text-[#100108] dark:text-[#FCFCFC]"
                id={`about-section-title-${index}`}
              >
                {card.title}
              </h2>
              <span
                className="flex font-inter self-stretch text-[1.rem] font-[400] text-[#100108] dark:text-[#FCFCFC] preserve-whitespace"
                style={{ whiteSpace: "pre-line" }}
              >
                {card.desc}
              </span>
            </div>
          </article>
        ))}

        {/* Experience Section */}
        <section className="flex flex-col items-start self-stretch gap-5 lg:py-5 lg:px-14" aria-labelledby="experience-heading">
          <header className="hidden lg:flex justify-center items-center self-stretch py-5 px-14">
            <h2
              className="font-inter text-3xl font-[700] text-[#100108] dark:text-[#FCFCFC]"
              id="experience-heading"
            >
              Experience
            </h2>
          </header>
          <h2 className="lg:hidden font-inter text-xl font-[700] text-[#100108] dark:text-[#FCFCFC]">
            Experience
          </h2>
          <ul className="flex flex-col justify-center items-start self-stretch gap-6" aria-label="Experience list">
            <li className="flex flex-col justify-center items-start self-stretch gap-3">
              <div className="flex items-center self-stretch gap-4">
                <img
                  src={img2}
                  alt="SignatureTV logo"
                  className="w-[3.75rem] h-[3.75rem] rounded-lg"
                />
                <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
                  <div className="flex justify-between items-center self-stretch">
                    <div className="flex flex-col items-start gap-[0.5rem]">
                      <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
                        Ux Designer
                      </span>
                      <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
                        SignatureTV
                      </span>
                    </div>
                    <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
                      Jul, 2024-Present
                    </span>
                  </div>
                </div>
              </div>
              <span className="flex flex-col items-start font-inter text-[#100108] dark:text-[#FCFCFC] text-[1rem] font-[400]">
                Thriveagric
              </span>
            </li>
            <li className="flex flex-col justify-center items-start self-stretch gap-3">
              <div className="flex items-center self-stretch gap-[1rem]">
                <img
                  src={img3}
                  alt="EME Foundation logo"
                  className="w-[3.75rem] h-[3.75rem] rounded-[0.5rem]"
                />
                <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
                  <div className="flex justify-between items-center self-stretch">
                    <div className="flex flex-col items-start gap-[0.5rem]">
                      <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
                        Volunteer UI Designer
                      </span>
                      <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
                        EME Foundation
                      </span>
                    </div>
                    <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
                      Jul, 2024-Present
                    </span>
                  </div>
                </div>
              </div>
              <span className="flex flex-col items-start font-inter text-[#100108] dark:text-[#FCFCFC] text-[1rem] font-[400]">
                Thriveagric
              </span>
            </li>
            <li className="flex flex-col justify-center items-start self-stretch gap-3">
              <div className="flex items-center self-stretch gap-[1rem]">
                <img
                  src={img4}
                  alt="Thriveagric logo"
                  className="w-[3.75rem] h-[3.75rem] rounded-[0.5rem]"
                />
                <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
                  <div className="flex justify-between items-center self-stretch">
                    <div className="flex flex-col items-start gap-[0.5rem]">
                      <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
                        Ux Designer
                      </span>
                      <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
                        Thriveagric
                      </span>
                    </div>
                    <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
                      Jul, 2024-Present
                    </span>
                  </div>
                </div>
              </div>
              <span className="flex flex-col items-start font-inter text-[#100108] dark:text-[#FCFCFC] text-[1rem] font-[400]">
                Thriveagric
              </span>
            </li>
            <li className="flex flex-col justify-center items-start self-stretch gap-3">
              <div className="flex items-center self-stretch gap-[1rem]">
                <img
                  src={img5}
                  alt="SSDA logo"
                  className="w-[3.75rem] h-[3.75rem] rounded-[0.5rem]"
                />
                <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
                  <div className="flex justify-between items-center self-stretch">
                    <div className="flex flex-col items-start gap-[0.5rem]">
                      <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
                        Ux Designer
                      </span>
                      <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
                        SSDA
                      </span>
                    </div>
                    <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
                      Jul, 2024-Present
                    </span>
                  </div>
                </div>
              </div>
              <span className="flex flex-col items-start font-inter text-[#100108] dark:text-[#FCFCFC] text-[1rem] font-[400]">
                Thriveagric
              </span>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}

export default AboutUs;