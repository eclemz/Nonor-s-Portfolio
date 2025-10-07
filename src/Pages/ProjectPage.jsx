import { useParams, useNavigate, Link } from "react-router-dom";
import { cardData2 } from "../Data/Data";
import { IoIosArrowBack } from "react-icons/io";
import React, { useRef, useEffect, useState } from "react";
import { Buttons, Buttons1 } from "../Components/Buttons";

function PictureOptimized({ file, alt = "", className = "" }) {
  if (!file) return null;

  const ext = file.split(".").pop().toLowerCase();

  if (ext === "svg") {
    return (
      <img
        src={`/optimized/${file}`}
        alt={alt}
        className={className}
        loading="lazy"
      />
    );
  }

  return (
    <picture>
      <source
        srcSet={`/optimized/${file.replace(/\.\w+$/, ".avif")}`}
        type="image/avif"
      />
      <source
        srcSet={`/optimized/${file.replace(/\.\w+$/, ".webp")}`}
        type="image/webp"
      />
      <img
        src={`/optimized/${file}`}
        alt={alt}
        className={className}
        loading="lazy"
      />
    </picture>
  );
}

function ProjectPage() {
  const params = useParams();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [sections, setSections] = useState([]);
  const [prevProject, setPrevProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);

  // Helper function to render text with bold parts
  const renderBoldText = (input) => {
    if (input == null) return null;

    // If we get an array, render each item separately (keeps original formatting)
    if (Array.isArray(input)) {
      return input.map((item, idx) => (
        <div key={idx} className="whitespace-pre-line">
          {renderBoldText(item)}
        </div>
      ));
    }

    // If it's not a string (maybe already JSX), just return it
    if (typeof input !== "string") {
      return input;
    }

    // Split by ** and wrap the odd parts in <strong>
    const parts = input.split("**");
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold">
          {part}
        </strong>
      ) : (
        // keep whitespace-pre-line on the container that wraps this result
        <span key={i}>{part}</span>
      )
    );
  };

  useEffect(() => {
    const keys = Object.keys(cardData2);
    const index = keys.indexOf(params.projectName);

    if (index !== -1) {
      setCurrentIndex(index);

      // <-- FILTER OUT id:3 (Feedback) here so it never renders
      const raw = cardData2[params.projectName] || [];
      const filtered = raw.filter((s) => s.id !== 3);
      setSections(filtered);

      setPrevProject(index > 0 ? keys[index - 1] : null);
      setNextProject(index < keys.length - 1 ? keys[index + 1] : null);
    }
  }, [params.projectName]);

  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRefs = useRef([]);

  const handleNext = () => {
    const keys = Object.keys(cardData2);
    const nextIndex = (currentIndex + 1) % keys.length;
    navigate(`/project/${keys[nextIndex]}`);
  };

  const handlePrevious = () => {
    const keys = Object.keys(cardData2);
    const prevIndex = (currentIndex - 1 + keys.length) % keys.length;
    navigate(`/project/${keys[prevIndex]}`);
  };

  if (!sections) {
    return (
      <div className="text-white">
        <p>Project not found.</p>
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
      block: "center",
      inline: "nearest",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionRefs.current.forEach((ref, i) => {
              if (ref && ref.isSameNode(entry.target)) {
                setActiveIndex(i);
              }
            });
          }
        });
      },
      { root: null, rootMargin: "0px 0px -30% 0px", threshold: 0.25 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [sections]);

  // find the sections we care about by id (keeps layout stable even if order changes)
  const overview = sections.find((s) => s.id === 1) || sections[0];
  const challenges = sections.find((s) => s.id === 2);
  const keyInsight = sections.find((s) => s.id === 4);
  const impacts = sections.find((s) => s.id === 5);

  return (
    <main className="flex flex-col items-start py-12 lg:px-14 lt:px-10 md:px-8 px-4 md:gap-10 gap-5 bg-white dark:bg-[#100108] w-full">
      <nav
        className="lg:hidden md:flex lg:pt-28 md:pt-20 pt-12  md:-mb-8 -mb-4 justify-center items-center gap-3 bg-inherit text-black dark:text-[#FCFCFC]"
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
        <a href="" aria-label={`Open external link for ${params.projectName}`}>
          <span className='self-stretch text-black dark:text-[#FCFCFC] font-inter text-base font-[500] underline decoration-solid decoration-1 underline-offset-2"'>
            Link
          </span>
        </a>
      </div>

      {/* Mobile unified layout */}
      <div className="md:hidden flex flex-col gap-16">
        {/* Overview (full width) */}
        {overview && (
          <article className="flex flex-col w-full gap-12 bg-white dark:bg-[#100108] rounded-lg">
            <PictureOptimized
              file={overview.image1}
              alt={overview.title1 ?? "Project image section 1"}
              className="w-full rounded-t-lg"
            />
            <div className="flex flex-col self-stretch items-start gap-4">
              <h3 className="font-inter text-[#9D979A] text-xl font-bold">
                {overview.title1}
              </h3>
              <span className="font-inter text-[#1a1020] dark:text-[#FCFCFC] whitespace-pre-line text-base font-normal">
                {renderBoldText(overview.desc1)}
              </span>
            </div>
          </article>
        )}

        {/* Challenges (image + text in row) */}
        {challenges && (
          <article className="flex flex-col items-start self-stretch gap-12 bg-white dark:bg-[#100108] rounded-lg">
            <PictureOptimized
              file={challenges.image2 ?? challenges.image1}
              alt={
                challenges.title2 ?? challenges.title1 ?? "Project challenges"
              }
              className="w-full rounded-lg"
            />
            <div className="flex flex-col self-stretch items-start gap-4 flex-1">
              <h3 className="font-inter text-[#9D979A] text-xl font-bold">
                {challenges.title2 ?? challenges.title1}
              </h3>
              <span className="font-inter text-[#1a1020] dark:text-[#FCFCFC] whitespace-pre-line text-base font-normal">
                {renderBoldText(challenges.desc2 ?? challenges.desc1)}
              </span>
            </div>
          </article>
        )}

        {/* Impact (full width, no image) */}
        {impacts && (
          <article className="flex flex-col w-full gap-4 bg-white dark:bg-[#100108] rounded-lg">
            <h3 className="font-inter text-[#9D979A] text-xl font-bold">
              {impacts.title5}
            </h3>
            {Array.isArray(impacts.desc5) ? (
              <ul className="list-disc pl-5 space-y-2 whitespace-pre-line font-inter text-black dark:text-[#FCFCFC] text-base">
                {impacts.desc5.map((point, index) => (
                  <li
                    key={index}
                    className="font-inter text-[#1a1020] dark:text-[#FCFCFC] text-base"
                  >
                    {renderBoldText(point)}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="font-inter text-[#1a1020] dark:text-[#FCFCFC] text-base font-normal break-words whitespace-pre-line">
                {renderBoldText(impacts.desc5)}
              </span>
            )}
          </article>
        )}

        {/* Key Insight (full width, no image) */}
        {keyInsight && (
          <article className="flex flex-col w-full gap-4 bg-white dark:bg-[#100108] rounded-lg">
            <h3 className="font-inter text-[#9D979A] text-xl font-bold">
              {keyInsight.title4 ?? keyInsight.title1}
            </h3>
            <span className="font-inter text-[#1a1020] dark:text-[#FCFCFC] text-base font-normal break-words whitespace-pre-line">
              {renderBoldText(keyInsight.desc4 ?? keyInsight.desc1)}
            </span>
          </article>
        )}
      </div>

      {/* Sidebar and unified layout */}
      <section className="hidden md:flex lt:pl-16 lg:pl-32 flex-row gap-7 bg-white dark:bg-[#100108] ">
        <div className="hidden lg:flex w-full flex-col gap-2 fixed left-0 py-3 px-14 top-[5rem] z-30 items-start bg-inherit">
          <span className="font-inter text-2xl lg:text-2xl font-bold text-black dark:text-[#FCFCFC]">
            {displayName}
          </span>
          <a
            href=""
            className="group text-black flex dark:text-[#FCFCFC] gap-2 font-inter text-sm lg:text-xl font-[500] underline decoration-solid decoration-2 underline-offset-4"
            aria-label={`Open external link for ${displayName}`}
          >
            Link
          </a>
        </div>

        {/* Side Scroll Buttons */}
        <aside className="hidden lg:flex flex-col fixed z-30 gap-2 px-8 py-3 left-6 top-48">
          <h3 className="text-2xl font-inter font-semibold text-[#746C70]">
            Content
          </h3>
          {sections.map((section, idx) => {
            const label =
              section.title ||
              section.title1 ||
              section.title2 ||
              section.title3 ||
              section.title4 ||
              section.title5 ||
              `Section ${idx + 1}`;

            return (
              <button
                key={idx}
                onClick={() => handleScroll(idx)}
                className={`text-left py-2 transition-all relative ${
                  idx === activeIndex
                    ? "font-semibold border-b-2 border-[#100108] dark:border-[#FCFCFC]"
                    : "border-b-2 border-transparent"
                } text-black dark:text-[#FCFCFC]`}
              >
                {label}
              </button>
            );
          })}
        </aside>

        {/* Unified layout for all screen sizes */}
        <div className="flex flex-col lg:pt-[7rem] lt:px-16 lg:px-[120px] bg-white dark:bg-[#100108] gap-16">
          {/* Overview (full width) */}
          {overview && (
            <article
              ref={(el) => (sectionRefs.current[0] = el)}
              className="flex flex-col w-full gap-16 bg-white dark:bg-[#100108] rounded-lg"
            >
              <PictureOptimized
                file={overview.image1?.fallback || overview.image1}
                alt={overview.title1 ?? "Project image section 1"}
                className="w-full lg:rounded-t-xl md:rounded-t-[12px]"
              />
              <div className="flex flex-col self-stretch items-start gap-4">
                <h3 className="font-inter text-[#9D979A] text-xl font-bold">
                  {overview.title1}
                </h3>
                <span className="font-inter text-[#1a1020] dark:text-[#FCFCFC] whitespace-pre-line text-base font-normal">
                  {renderBoldText(overview.desc1)}
                </span>
              </div>
            </article>
          )}

          {/* Challenges (image + text in row) */}
          {challenges && (
            <article
              ref={(el) => (sectionRefs.current[overview ? 1 : 0] = el)}
              className="flex items-center self-stretch gap-5 bg-white dark:bg-[#100108] rounded-lg"
            >
              <div className="flex flex-col self-stretch items-start md:gap-5 gap-4 flex-1">
                <h3 className="font-inter text-[#9D979A] text-xl font-bold">
                  {challenges.title2 ?? challenges.title1}
                </h3>
                <span className="font-inter text-[#1a1020] dark:text-[#FCFCFC] whitespace-pre-line text-base font-normal">
                  {renderBoldText(challenges.desc2 ?? challenges.desc1)}
                </span>
              </div>

              <PictureOptimized
                file={challenges.image2 ?? challenges.image1}
                alt={
                  challenges.title2 ?? challenges.title1 ?? "Project challenges"
                }
                className="lg:h-[31.5rem] md:h-[25.75rem] w-full self-stretch flex-1"
              />
            </article>
          )}

          <div
            className="flex flex-row gap-6 self-stretch items-start flex-wrap
            justify-betwee bg-white dark:bg-[#100108]"
          >
            {/* Key Insight (no image) */}
            {keyInsight && (
              <article
                ref={(el) => {
                  const refIndex =
                    (overview ? 1 : 0) +
                    (challenges ? 1 : 0) +
                    (impacts ? 1 : 0);
                  sectionRefs.current[refIndex] = el;
                }}
                className="flex flex-col flex-1 gap-3 items-start bg-white dark:bg-[#100108] rounded-lg"
              >
                <h3 className="font-inter text-[#9D979A] text-xl font-bold">
                  {keyInsight.title4 ?? keyInsight.title1}
                </h3>
                <span className="font-inter text-[#1a1020] dark:text-[#FCFCFC] text-base font-normal break-words whitespace-pre-line">
                  {renderBoldText(keyInsight.desc4 ?? keyInsight.desc1)}
                </span>
              </article>
            )}
            {/* Impact (no image) */}
            {impacts && (
              <article
                ref={(el) => {
                  const refIndex = (overview ? 1 : 0) + (challenges ? 1 : 0);
                  sectionRefs.current[refIndex] = el;
                }}
                className="flex flex-col flex-1 gap-3 items-start bg-white dark:bg-[#100108] rounded-lg"
              >
                <h3 className="font-inter text-[#9D979A] text-xl font-bold">
                  {impacts.title5}
                </h3>
                {Array.isArray(impacts.desc5) ? (
                  <ul className="list-disc space-y-2 whitespace-pre-line font-inter text-black dark:text-[#FCFCFC] text-base">
                    {impacts.desc5.map((point, index) => (
                      <li
                        key={index}
                        className="font-inter text-[#1a1020] dark:text-[#FCFCFC] text-base"
                      >
                        {renderBoldText(point)}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="font-inter text-[#1a1020] dark:text-[#FCFCFC] text-base font-normal break-words whitespace-pre-line">
                    {renderBoldText(impacts.desc5)}
                  </span>
                )}
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="sticky bottom-0 left-2 z-30 lg:pl-32 items-start gap-7 self-stretch w-full  ">
        <div className="flex flex-col w-full md:flex-row justify-between items-start self-stretch md:py-4  px-0 md:px-0 lt:px-[4.5rem] lg:px-56 gap-4">
          {prevProject && (
            <Buttons1
              onClick={handlePrevious}
              className={`h-8 md:h-10 flex md:w-[50%] lt:h-10 font-inter border bg-white/80 dark:bg-black/80 border-black dark:border-[#EC157D] text-black dark:text-[#EC157D] md:self-auto self-stretch`}
            >
              Previous Project
            </Buttons1>
          )}
          {nextProject && (
            <Buttons
              onClick={handleNext}
              className={`h-8 md:h-10 flex md:w-[50%] lt:h-10 font-inter text-white bg-[#EC157D] md:self-auto self-stretch`}
            >
              Next Project
            </Buttons>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProjectPage;
