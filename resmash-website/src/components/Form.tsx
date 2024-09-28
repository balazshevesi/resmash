import { useState } from "react";

import type { Data } from "../content/textEnglish";
// Ensure to use the correct path
import { $form } from "../store/Form";
import { useStore } from "@nanostores/react";
import { Loader } from "lucide-react";

interface FormProps {
  content: Data;
}

export default function Form({ content }: FormProps) {
  const form = useStore($form);

  // Form state
  const [formData, setFormData] = useState({
    numberofcourts: 1,
    type: "",
    size: "",
    use: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    questions: "",
  });

  // Handler for form input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission handler
  async function onSubmit(e: any) {
    e.preventDefault();
    $form.set({ ...$form.get(), isLoading: true });

    try {
      const response = await fetch(
        "https://form-to-email-production.up.railway.app/info@resmash.com",
        {
          method: "POST",
          body: JSON.stringify({ ...formData, _subject: "Formulär: Resmash" }),
          headers: { "Content-Type": "application/json" },
        },
      );

      if (response.ok) {
        $form.set({
          ...$form.get(),
          isLoading: false,
          isError: false,
          isSubmitSuccess: true,
        });
        setFormData({
          numberofcourts: 1,
          type: "",
          size: "",
          use: "",
          firstname: "",
          lastname: "",
          phonenumber: "",
          email: "",
          questions: "",
        }); // Reset the form
      } else {
        throw new Error("Form submission failed.");
      }
    } catch (error) {
      $form.set({
        ...$form.get(),
        isLoading: false,
        isError: true,
        isSubmitSuccess: false,
      });
      console.error("Form submission error:", error);
    }
  }

  if (form.isOpen) {
    return (
      <form
        className="formmm fixed left-0 top-0 z-50 h-screen w-screen py-12"
        onSubmit={onSubmit}
      >
        <div
          onClick={() => {
            $form.set({ ...$form.get(), isOpen: false });
          }}
          className="menueform-bg absolute left-0 top-0 h-screen w-screen cursor-pointer backdrop-blur"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        ></div>
        <div className="form-menue relative mx-auto max-h-full max-w-xl overflow-scroll rounded-2xl bg-slate-200 p-5 text-slate-800 shadow-lg">
          <div className="collapse collapse-arrow relative z-10 bg-slate-100 shadow">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <h4 className="collapse-title text-lg font-medium">
              {content.form.title}
            </h4>
            <div className="collapse-content">
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="howmany">
                    {content.form.labels.numberOfCourts}{" "}
                    <span className="select-none">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="grow">
                      <input
                        name="numberofcourts"
                        id="howmany"
                        className="range-counterrr range mt-4"
                        type="range"
                        min="0"
                        max="9"
                        value={formData.numberofcourts}
                        step="1"
                        onChange={handleChange}
                      />
                      <div className="flex w-full justify-between px-2 text-xs">
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                      </div>
                    </div>
                    <input
                      name="numberofcourts"
                      type="number"
                      max="9"
                      min="0"
                      placeholder=""
                      value={formData.numberofcourts}
                      className="spin-boxxx min input input-bordered w-20"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="whattype" className="mb-4">
                    {content.form.labels.type}{" "}
                    <span className="select-none">*</span>
                  </label>
                  <select
                    name="type"
                    required
                    id="whattype"
                    className="select select-bordered"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      {content.form.placeholders.type}
                    </option>
                    {content.form.options.types.map((type) => (
                      <option
                        key={type}
                        value={type.toLowerCase().replace(" ", "_")}
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="whatsize" className="mb-4">
                    {content.form.labels.size}{" "}
                    <span className="select-none">*</span>
                  </label>
                  <select
                    name="size"
                    required
                    id="whatsize"
                    className="select select-bordered"
                    value={formData.size}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      {content.form.placeholders.size}
                    </option>
                    {content.form.options.sizes.map((size) => (
                      <option
                        key={size}
                        value={size.toLowerCase().replace(" ", "_")}
                      >
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="use" className="mb-4">
                    {content.form.labels.use}{" "}
                    <span className="select-none">*</span>
                  </label>
                  <select
                    name="use"
                    required
                    id="use"
                    className="select select-bordered"
                    value={formData.use}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      {content.form.placeholders.use}
                    </option>
                    {content.form.options.uses.map((use) => (
                      <option key={use} value={use.toLowerCase()}>
                        {use}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow mt-4 bg-slate-100 shadow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              Contact and Submit
            </div>
            <div className="collapse-content">
              <div className="flex gap-4">
                <div>
                  <label htmlFor="firstname">
                    {content.form.labels.firstName}{" "}
                    <span className="select-none">*</span>
                  </label>
                  <input
                    name="firstname"
                    required
                    id="firstname"
                    type="text"
                    placeholder={content.form.placeholders.firstName}
                    className="input input-bordered my-4 w-full"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastname">
                    {content.form.labels.lastName}{" "}
                    <span className="select-none">*</span>
                  </label>
                  <input
                    name="lastname"
                    required
                    id="lastname"
                    type="text"
                    placeholder={content.form.placeholders.lastName}
                    className="input input-bordered my-4 w-full"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phonenumber">
                  {content.form.labels.phoneNumber}{" "}
                  <span className="select-none">*</span>
                </label>
                <input
                  name="phonenumber"
                  required
                  id="phonenumber"
                  type="text"
                  placeholder={content.form.placeholders.phoneNumber}
                  className="input input-bordered my-4 w-full"
                  value={formData.phonenumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">
                  {content.form.labels.email}{" "}
                  <span className="select-none">*</span>
                </label>
                <input
                  name="email"
                  required
                  id="email"
                  type="email"
                  placeholder={content.form.placeholders.email}
                  className="input input-bordered my-4 w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="other">{content.form.labels.questions}</label>
                <textarea
                  name="questions"
                  id="other"
                  className="textarea textarea-bordered my-4 w-full"
                  placeholder={content.form.placeholders.questions}
                  value={formData.questions}
                  onChange={handleChange}
                ></textarea>
              </div>
              {form.isError && (
                <div className="mb-3 font-semibold text-red-600">
                  {content.form.errorMessage}
                </div>
              )}
              {form.isSubmitSuccess && (
                <div className="mb-3 font-semibold text-green-600">
                  {content.form.successMessage}
                </div>
              )}
              <button type="submit" className="btn btn-primary btn-block">
                {content.form.submitButton}{" "}
                {form.isLoading && <Loader className="animate-spin" />}
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  } else {
    return null;
  }
}
