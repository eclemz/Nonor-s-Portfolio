
import { useParams, useNavigate, Link } from "react-router-dom";
import { cardData2 } from "../Data/Data";
import { IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";


function PictureOptimized({ file, alt = "", className = "" }) {
  if (!file) return null;
  
  return (
    <picture>
      <source srcSet={`/optimized/${file.replace(/\.\w+$/, ".avif")}`} type="image/avif" />
      <source srcSet={`/optimized/${file.replace(/\.\w+$/, ".webp")}`} type="image/webp" />
      <img src={`/optimized/${file}`} alt={alt} className={className} loading="lazy" />
    </picture>
  );
}

function ProjectPage() {
  const params = useParams();
  const navigate = useNavigate();
  const sections = cardData2[params.projectName];
  const sectionRefs = useRef([]);

  if (!sections) {
    return (
      <div className="text-white">
        <p>Project not found.</p>
        {/* Added: aria-label for clarity */}
        <button
          onClick={() => navigate(-1)}
          className="underline text-blue-500"
          aria-label="Go back to previous page"
        >
          Go Back
        </button>
      </div>
    );
  }

  const displayName =
    params.projectName.charAt(0).toUpperCase() + params.projectName.slice(1);

  const handleScroll = (idx) => {
    sectionRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="flex flex-col items-start py-12 lg:px-14 md:px-8 px-4 md:gap-10 gap-5 bg-white dark:bg-[#100108] w-full">
      <nav
        className="lg:hidden md:flex md:pt-28 pt-16 justify-center items-center gap-3 bg-inherit text-black dark:text-[#FCFCFC]"
        role="navigation"
        aria-label="Back navigation"
      >
        <Link
          to="/projects"
          className="visited:dark:text-[#FCFCFC] visited:text-[#FCFCFC] hover:underline no-underline flex gap-1 py-3 justify-center items-center"
          aria-label="Back to projects"
        >
          <IoIosArrowBack
            className="flex h-5 w-5 justify-center items-center text-black dark:text-[#FCFCFC]"
            aria-hidden="true"
          />
          <span className="text-black dark:text-[#FCFCFC] text-sm md:text-base font-[500] justify-center ">
            Back
          </span>
        </Link>
      </nav>

      <div className="lg:hidden flex flex-col items-start self-stretch gap-2">
        <span className="font-inter text-2xl font-[700] text-black dark:text-[#FCFCFC]">
          {params.projectName}
        </span>
        <a
          href=""
          aria-label={`Open external link for ${params.projectName}`}
        >
          <span className='self-stretch text-black dark:text-[#FCFCFC] font-inter text-base font-[500] underline decoration-solid decoration-1 underline-offset-2"'>
            Link
          </span>
        </a>
      </div>
      <div className="md:hidden block">
        {[1, 2, 3, 4, 5].map((n, i) => {
          // Find the section object that has the keys for this n
          const section = sections.find(
            (s) => s[`title${n}`] || s[`desc${n}`] || s[`image${n}`]
          );
          if (!section) return null;

          const image = section[`image${n}`];
          const time = section[`time${n}`];
          const title = section[`title${n}`];
          const desc = section[`desc${n}`];

          return (
            <article key={n} className="block w-full">
              <div className="flex flex-col items-start self-stretch py-4 gap-3">
                {image && (
                  <PictureOptimized
                    file={image}
                    alt={title ?? `Project image section ${n}`}
                    className="w-full rounded-lg"
                  />
                )}
                {time && (
                  <span className="font-inter text-[0.625rem] font-[400] text-[#FCFCFC] mt-1">
                    {time}
                  </span>
                )}
                {title && (
                  <h3 className="font-inter text-[#9D979A] text-[1.125rem] font-[700] mt-3">
                    {title}
                  </h3>
                )}
                {desc && (
                  <span className="font-inter text-black dark:text-[#FCFCFC] text-[1rem] font-[400] mt-1">
                    {desc}
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="hidden md:flex lg:pl-32 flex-row gap-7 bg-white dark:bg-[#100108] ">
        <div className="hidden lg:flex w-full flex-col gap-2 fixed left-0 py-3 px-14 top-[5.8125rem] z-30 items-start bg-inherit">
          <span className="font-inter text-[2.5rem] lg:text-2xl font-bold text-black dark:text-[#FCFCFC]">
            {displayName}
          </span>
          <a
            href=""
            className="text-black dark:text-[#FCFCFC] font-inter text-sm lg:text-xl font-[500] underline decoration-solid decoration-2 underline-offset-4"
            aria-label={`Open external link for ${displayName}`}
          >
            Link
          </a>
        </div>

        {/* Side Scroll Buttons */}
        <aside
          className="md:hidden lg:flex flex-col fixed z-30 gap-2 px-8 py-3 pitems-start left-6 top-48"
          aria-label="Section navigation"
        >
          <h3 className="text-2xl font-inter font-semibold">Content</h3>
          {sections.map((section, idx) => (
            <button
              key={idx}
              className="text-black gap-2 dark:text-[#FCFCFC] py-2 rounded justify-center transition-colors text-left"
              onClick={() => handleScroll(idx)}
              aria-label={`Scroll to section ${section.title || section.title1 || section.title2 || section.title3 || section.title4 || section.title5 || idx + 1}`}
            >
              {section.title ||
                section.title1 ||
                section.title2 ||
                section.title3 ||
                section.title4 ||
                section.title5}
            </button>
          ))}
        </aside>

        {/* For Desktop */}
        <div className="flex flex-col lg:pt-[9.5rem] bg-white dark:bg-[#100108]">
          {/* First Card - Column, full stretch */}
          {sections[0] && (
            <article
              ref={(el) => (sectionRefs.current[0] = el)}
              className="flex flex-col w-full gap-4 bg-white dark:bg-[#100108] rounded-lg"
            >
              <PictureOptimized
                file={sections[0].image1}
                alt={sections[0].title1 ?? "Project image section 1"}
                className="w-full rounded-lg"
              />
              <h3 className="font-inter text-[#9D979A] text-xl font-bold">
                {sections[0].title1}
              </h3>
              <span className="font-inter text-[#1a1020] dark:text-[#FCFCFC] text-base font-normal">
                {sections[0].desc1}
              </span>
            </article>
          )}

          {/* Second Card - Grid, 2 columns, swapped order */}
          {sections[1] && sections[2] && sections[3] && sections[4] && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* First column: image then title/desc */}
                <article
                  ref={(el) => (sectionRefs.current[1] = el)}
                  className="flex flex-col gap-4 bg-white dark:bg-[#100108] p-4 rounded-lg"
                >
                  <PictureOptimized
                    file={sections[1].image2}
                    alt={sections[1].title2 ?? "Project image section 2"}
                    className="w-full rounded-lg"
                  />
                  <h3 className="font-inter text-[#9D979A] text-xl font-bold">
                    {sections[1].title2}
                  </h3>
                  <span className="font-inter text-[#1a1020] dark:text-[#FCFCFC] text-base font-normal">
                    {sections[1].desc2}
                  </span>
                </article>
                {/* Second column: title/desc then image */}
                <article
                  ref={(el) => (sectionRefs.current[2] = el)}
                  className="flex flex-col gap-4 bg-white dark:bg-[#100108] p-4 rounded-lg"
                >
                  <h3 className="font-inter text-[#9D979A] text-xl font-bold">
                    {sections[2].title3}
                  </h3>
                  <span className="font-inter text-[#1a1020] dark:text-[#FCFCFC] text-base font-normal">
                    {sections[2].desc3}
                  </span>
                  <PictureOptimized
                    file={sections[2].image3}
                    alt={sections[2].title3 ?? "Project image section 3"}
                    className="w-full rounded-lg"
                  />
                </article>
              </div>
              {/* Third Card for both tablet and desktop */}

              <article
                ref={(el) => (sectionRefs.current[3] = el)}
                className="flex lg:flex-col lg:w-full flex-row items-start self-stretch gap-14 bg-white dark:bg-[#100108] p-4 rounded-lg"
              >
                <PictureOptimized
                  file={sections[3].image4}
                  alt={sections[3].title4 ?? "Project image section 4"}
                  className="md:flex lg:self-stretch self-center rounded-lg md:w-[346px] lg:w-auto"
                />

                <div className="flex flex-col lg:flex-row items-start py-5 gap-5 flex-1 min-w-0">
                  <div>
                    <h3 className="font-inter text-[#9D979A] text-xl font-bold">
                      {sections[3].title4}
                    </h3>
                    <span className="font-inter text-[#1a1020] dark:text-[#FCFCFC] text-base font-normal break-words whitespace-normal">
                      {sections[3].desc4}
                    </span>
                  </div>
                  <div className="md:hidden lg:block">
                    <h3 className="font-inter text-[#9D979A] text-xl font-bold">
                      {sections[4].title5}
                    </h3>
                    <span className="font-inter text-black dark:text-[#FCFCFC] text-base font-normal">
                      {sections[4].desc5}
                    </span>
                  </div>
                </div>
              </article>

              {sections[4] && (
                <article
                  ref={(el) => (sectionRefs.current[4] = el)}
                  className="lg:hidden flex flex-col w-full gap-4 bg-white dark:bg-[#100108] p-4 rounded-lg"
                >
                  <h3 className="font-inter text-[#9D979A] text-xl font-bold">
                    {sections[4].title5}
                  </h3>
                  <span className="font-inter text-black dark:text-[#FCFCFC] text-base font-normal">
                    {sections[4].desc5}
                  </span>
                </article>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;