import terms from "./terms";

const data = {
  lang: "en",
  title: "Resmash - the place for padel",
  home: {
    header: {
      h1: "Second-Hand Padel Courts at Unbeatable Prices!",
      h2: (
        <>
          Looking for affordable padel courts? Resmash specializes in used and
          second-hand courts sourced from Sweden, offering you high-quality
          options at a fraction of the cost of new ones. By choosing a
          second-hand court, you not only save money but also contribute to
          sustainability by giving these courts a second life.
        </>
      ),
      cta1: "Book a call",
      cta2: "Learn more",
    },
    secondSection: {
      title: "Affordable Second-Hand Padel Courts—Focused on Value for Money",
      content: (
        <>
          We specialize in buying and selling second-hand padel courts, with a
          clear focus on offering cost-effective solutions to our customers. Our
          courts come primarily from Sweden and are carefully selected to ensure
          they remain fully functional and ready for reuse.
          <br />
          Our customers prioritize value, and with Resmash, you gain access to
          second-hand padel courts at unbeatable prices. Ideal for clubs or
          facilities looking to expand while keeping costs low.
          <br />
          We also work closely with Swedish bankruptcy administrators, helping
          to repurpose unused courts and related equipment across EU markets.
          Whether you need assistance with selecting a court or arranging
          delivery, our team is here to make the process smooth and
          straightforward.
        </>
      ),
      endTitle:
        "Choose Resmash for your second-hand padel court needs and maximize your investment!",
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
    fifthSection: {
      title: "New vs. Used Padel Courts: Get Our Expert Guide!",
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
          Not sure if a new or second-hand padel court is the best fit for your
          needs? Our detailed guide breaks down the pros and cons of each
          option, helping you make an informed decision that suits your budget
          and goals.
          <br />
          Email us today to receive your free copy and take the next step
          towards building your dream padel facility!
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
