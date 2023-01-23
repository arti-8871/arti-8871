import React, { useState } from "react";
const ProductFaq = [
  {
    id: 1,
    ques: "What is Dozee?",
    ans: "Dozee is the pioneer in contactless, continuous remote patient monitoring (RPM) in hospitals & at home, delivering unparalleled patient safety & maximizing utilization of ICU beds.",
  },
  {
    id: 2,
    ques: "What are the parameters monitored by Dozee?",
    ans: "The most used API is a RESTful API (Representational State Transfer API). RESTful APIs allow for interoperability between different types of applications and devices on the internet",
  },
  {
    id: 3,
    ques: "How is Dozee different from an ICU monitor?",
    ans: "The most used API is a RESTful API (Representational State Transfer API). RESTful APIs allow for interoperability between different types of applications and devices on the internet",
  },
  {
    id: 4,
    ques: "Dozee works with which mattress?",
    ans: "The most used API is a RESTful API (Representational State Transfer API). RESTful APIs allow for interoperability between different types of applications and devices on the internet",
  },
  {
    id: 5,
    ques: "What are the use cases of Dozee?",
    ans: "The most used API is a RESTful API (Representational State Transfer API). RESTful APIs allow for interoperability between different types of applications and devices on the internet",
  },
  {
    id: 6,
    ques: "How are home and hospital products different?",
    ans: "The most used API is a RESTful API (Representational State Transfer API). RESTful APIs allow for interoperability between different types of applications and devices on the internet",
  },
];

function Product(props) {
  const [active, setActive] = useState(1);
  const open = (id) => {
    setActive(id);
  };
  return (
    <>
      <div className={`faq ${props.render === 1 ? "show" : "hide"}`}>
        {ProductFaq.map((i) => {
          return (
            <>
              <div className={`FAQItem ${active === i.id ? "active" : ""}`} key={i.id}>
                <h3
                  onClick={() => open(i.id)}
                  id={`ques-${i.id}`}
                  className="ques"
                >
                  <div className="key">
                      {i.id}.{i.ques}
                  </div>

                  {/* <div className={`plus ${active === i.id ? "show" : "hide"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <ellipse
                        rx="14"
                        ry="14"
                        transform="matrix(-4.42942e-08 1 1 4.31362e-08 14 14)"
                        fill="#0055D2"
                      />
                      <path
                        d="M10.94 16.2761L14 13.2228L17.06 16.2761L18 15.3361L14 11.3361L10 15.3361L10.94 16.2761Z"
                        fill="white"
                      />
                    </svg>
                  </div> */}
                  <div className={`plus ${active === i.id ? "show" : ""}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <circle
                        cx="14"
                        cy="14"
                        r="13.425"
                        transform="rotate(-90 14 14)"
                        stroke="#062C77"
                        strokeWidth="1.15"
                      />
                      <path
                        d="M10.94 11.7236L14 14.777L17.06 11.7236L18 12.6636L14 16.6636L10 12.6636L10.94 11.7236Z"
                        fill="#062C77"
                      />
                    </svg>
                  </div>
                </h3>
                <p
                  key={`ans-${i.id}`}
                  className={`ans ${active === i.id ? "show" : "close"} font-20`}
                >
                  {i.ans}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Product;
