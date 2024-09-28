import type { Data } from "../content/textEnglish";
import { $form } from "../store/Form";
import { $nav } from "../store/Nav";
import { useStore } from "@nanostores/react";
import { HU } from "country-flag-icons/react/3x2";
import { GB } from "country-flag-icons/react/3x2";

interface FormProps {
  content: Data;
}

export default function Nav({ content }: FormProps) {
  const form = useStore($form);
  const nav = useStore($nav);

  return (
    <div className="nav-wrapper fixed top-0 z-40 w-screen">
      <div className="nav-background absolute left-0 top-0 hidden h-screen w-full cursor-pointer bg-white bg-opacity-10 backdrop-blur-sm md:hidden"></div>
      <nav className="border-y-2 border-slate-600 bg-slate-800 bg-opacity-50 p-2 px-6 text-base font-semibold text-white shadow-xl backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="nav-logo">
            <img
              className="w-44 rounded-lg border-t-2 border-white border-opacity-10 bg-slate-100 bg-opacity-10 px-2"
              src="./images/logo.png"
              alt="Resmash Logo"
            />
          </div>
          <div className="nav-middle hidden gap-10 md:flex">
            <button
              btn-action="learn-more"
              className="transition-transform active:scale-95"
              onClick={() => {
                document
                  .querySelector(".this-is-how-we")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {content.nav.btn1} {/* Access 'Learn More' label from content */}
            </button>
            <button
              btn-action="contact"
              className="transition-transform active:scale-95"
              onClick={() => {
                document
                  .querySelector("footer")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {content.nav.btn2} {/* Access 'Contact Us' label from content */}
            </button>
          </div>
          <div className="nav-right hidden md:flex">
            <button
              onClick={() => {
                $form.set({ ...$form.get(), isOpen: true });
              }}
              className="btn uppercase active:text-sky-400"
              btn-action="open-form"
            >
              {content.nav.cta}{" "}
              {/* Access 'Interest Submission' label from content */}
            </button>
            {content.lang === "en" && (
              <a href="./hu" className="flex items-center justify-center px-4">
                <HU title="United States" className="w-10 rounded-md" />
              </a>
            )}
            {content.lang === "hu" && (
              <a href="./" className="flex items-center justify-center px-4">
                <GB title="United States" className="w-10 rounded-md" />
              </a>
            )}
          </div>
          <div className="nav-mobile-btn md:hidden">
            <label className="btn swap swap-rotate uppercase">
              <input
                checked={nav.isMobileOpen}
                onClick={() => {
                  $nav.set({ ...nav, isMobileOpen: !nav.isMobileOpen });
                }}
                className="menue-checkbox"
                type="checkbox"
              />
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"></path>
              </svg>
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"></polygon>
              </svg>
            </label>
          </div>
        </div>
        {nav.isMobileOpen && (
          <div className="nav-mobile flex-col py-4 md:hidden">
            <div className="flex flex-col gap-4 overflow-hidden rounded-xl">
              <button
                onClick={() => {
                  $nav.set({ ...$nav.get(), isMobileOpen: false });
                  document
                    .querySelector(".this-is-how-we")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-lg bg-white bg-opacity-10 px-8 py-2 transition-transform active:scale-95"
                btn-action="learn-more"
              >
                {content.nav.btn1}{" "}
                {/* Access 'Learn More' label from content */}
              </button>
              <button
                onClick={() => {
                  $nav.set({ ...$nav.get(), isMobileOpen: false });
                  document
                    .querySelector("footer")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-lg bg-white bg-opacity-10 px-8 py-2 transition-transform active:scale-95"
                btn-action="contact"
              >
                {content.nav.btn2}{" "}
                {/* Access 'Contact Us' label from content */}
              </button>
              <button
                onClick={() => {
                  $form.set({ ...$form.get(), isOpen: true });
                  $nav.set({ ...$nav.get(), isMobileOpen: false });
                }}
                className="btn uppercase active:text-sky-400"
                btn-action="open-form"
              >
                {content.nav.cta}{" "}
                {/* Access 'Interest Submission' label from content */}
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
