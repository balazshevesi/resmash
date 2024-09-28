import terms from "./terms";
import { HU } from "country-flag-icons/react/3x2";

const data = {
  altLangLink: (
    <a href="./hu" className="flex items-center justify-center px-4">
      <HU title="United States" className="w-10 rounded-md" />
    </a>
  ),
  lang: "en",
  title: "Resmash - the place for padel",
  home: {
    header: {
      h1: "Join the padel revolution with us!",
      h2: (
        <>
          Lead the padel game with a successful court. Our versatile and
          user-friendly courts offer a top-notch playing surface to your
          members. Perfect for clubs, leagues, and tournament organizers.
        </>
      ),
      cta1: "Book a call",
      cta2: "Learn more",
    },
    secondSection: {
      title: "Welcome to our company! We're glad to have you with us",
      content: (
        <>
          We are a dedicated team of experts specializing in purchasing and
          selling second-hand padel courts. Our primary mission is to provide
          high-quality, well-maintained courts from Sweden to other EU
          countries. With extensive industry knowledge, we excel in tailoring
          our offerings to match our customers' unique needs. We are committed
          to ensuring customer satisfaction and a hassle-free experience.
          <br />
          We take immense pride in the quality of our second-hand courts,
          exclusively dealing with those in excellent condition. Our team is
          always available to assist you, from selecting the right court to
          handling delivery. We also excel in identifying potential buyers for
          second-hand padel courts and related items, collaborating with Swedish
          bankruptcy administrators to facilitate cross-border sales within the
          EU.
        </>
      ),
      endTitle:
        "Thank you for choosing us, and we look forward to serving you!",
    },
    thirdSection: {
      title: "This is how we operate",
      timeline: [
        <>
          <strong>Contact:</strong> The customer contacts us with a request to
          buy a used padel court.
        </>,
        <>
          <strong>Consultation:</strong> We consult with the customer to
          understand their needs and preferences for the padel court they want
          to buy.
        </>,
        <>
          <strong>Search:</strong> We use our extensive network and resources to
          search for a suitable used padel court that matches the customer's
          requirements.
        </>,
        <>
          <strong>Inspection:</strong> Once we have found a suitable used padel
          court, we inspect it thoroughly to ensure that it meets our
          high-quality standards.
        </>,
        <>
          <strong>Delivery:</strong> We coordinate the delivery of the padel
          court to the customer's location.
        </>,
        <>
          <strong>Installation:</strong> If requested, we can also arrange for
          the installation of the padel court at the customer's site.
        </>,
        <>
          <strong>Follow-up:</strong> After the delivery and/or installation, we
          follow up with the customer to ensure that everything has been done to
          their satisfaction.
        </>,
      ],
      content: (
        <>
          After we have found a suitable court and inspected it to ensure it
          meets our customer's expectations, we will request a reservation fee
          from the customer. This fee secures the purchase and covers any
          expenses related to dismantling, transportation, and reinstallation of
          the court. The remaining payment is due upon delivery of the court to
          the customer. Our goal is to provide a hassle-free and seamless
          process for our customers, from start to finish.
        </>
      ),
    },
    fourthSection: {
      title: "Unlock the Potential of Second-Hand Padel Courts",
      content: (
        <>
          Investing in a used padel court offers numerous benefits, especially
          for clubs and facilities looking to diversify their offerings. Here's
          why:
          <br />
          <br />
          <strong className="font-semibold">
            Cost-Effective Solution:
          </strong>{" "}
          Opting for a second-hand padel court is a budget-friendly way to
          introduce this popular sport to your facility. Used padel courts
          provide a cost-effective alternative, allowing clubs to allocate
          resources more efficiently.
          <br />
          <br />
          <strong className="font-semibold">
            Maximize Facility Space:
          </strong>{" "}
          Many tennis clubs have successfully repurposed their space by
          replacing traditional tennis courts with used padel courts. By making
          this switch, clubs can accommodate more players and offer a wider
          range of activities, ultimately maximizing facility usage.
          <br />
          <br />
          <strong className="font-semibold">Community Engagement:</strong> Padel
          tennis has gained widespread popularity, attracting players of all
          ages and skill levels. By incorporating used padel courts into your
          facility, you can tap into this growing trend and attract new members
          from the local community. It's a great way to boost engagement and
          foster a sense of camaraderie among players.
        </>
      ),
    },
  },
  form: {
    title: "Request a Quote",
    labels: {
      numberOfCourts: "How many courts?",
      type: "Which type?",
      size: "Which size?",
      use: "Use",
      firstName: "First Name",
      lastName: "Last Name",
      phoneNumber: "Phonenumber",
      email: "E-mail",
      questions: "Other questions?",
    },
    placeholders: {
      numberOfCourts: "Select the number of courts",
      type: "Select Type",
      size: "Select size",
      use: "Select Use",
      firstName: "Type your first name",
      lastName: "Type your last name",
      phoneNumber: "Type your phone number",
      email: "Type your e-mail",
      questions: "Type here...",
    },
    options: {
      types: ["Classic / Standard", "Panoramic", "Super Panoramic"],
      sizes: ["Duo (20x10m)", "Singel (20x6m)"],
      uses: ["Indoors", "Outdoors"],
    },
    submitButton: "Submit",
    successMessage: "Successfully submitted the form",
    errorMessage: "Sorry, something went wrong, please contact us directly",
  },
  nav: {
    btn1: "Learn More",
    btn2: "Contact us",
    cta: "Interest Submission",
  },
  footer: {
    contact: {
      title: "Contact",
      companyName: "Resmash",
      streetName: "Ekvägen",
      streetNumber: "17",
      zipCode: "363 30",
      city: "Rottne",
      phoneDisplay: "+46 (0) 73 - 655 17 13",
      phone: "+46736551713",
      email: "info@resmash.com",
    },
    openingHours: {
      title: "Opening Hours",
      monday: {
        day: "Monday",
        openingTimes: "07.00 - 16.00",
      },
      tuesday: {
        day: "Tuesday",
        openingTimes: "07.00 - 16.00",
      },
      wednesday: {
        day: "Wednesday",
        openingTimes: "07.00 - 16.00",
      },
      thursday: {
        day: "Thursday",
        openingTimes: "07.00 - 16.00",
      },
      friday: {
        day: "Friday",
        openingTimes: "09.00 - 15.00",
      },
      saturday: {
        day: "Saturday",
        openingTimes: "10.00 - 15.00",
      },
      sunday: {
        day: "Sunday",
        openingTimes: "10.00 - 15.00",
      },
    },
    other: {
      title: "Other",
      termsOfUseBtn: "Terms Of Use",
      termsOfUse: terms,
    },
  },
};

export default data;
export type Data = typeof data;
