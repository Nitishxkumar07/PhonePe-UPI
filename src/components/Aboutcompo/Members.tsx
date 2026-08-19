"use client"
import Link from 'next/link';
import { useEffect, useState } from "react";
const Board = [
  {
    name: "rohit bhagat",
    post: "Chairperson of the Board and Non-Executive Independent Director",
    image: "https://www.phonepe.com/webstatic/14681/static/rohit-bhagat-8f48e881e6cb47b63fb055f364d47c10.png",
    description:
      "Rohit Bhagat is the Chairperson of the Board and Non-Executive Independent Director of our Company. He holds a Bachelor’s Degree of Technology in Mechanical Engineering from the Indian Institute of Technology, Delhi, Master’s Degree of Science in Engineering from the University of Texas, Austin, Master’s Degree in Management from the Kellogg School, Northwestern University, USA and has completed the Stanford Directors’ Consortium Executive Program. He has over 15 years of experience and was previously associated with Axis Bank Limited as an Independent Director, BlackRock as Chairman of the Asia Pacific region, Barclays Global Investors as Chief Operating Officer, and with the Boston Consulting Group.",
  },
  {
    name: "tarun bajaj",
    post: "Non-Executive Independent Director",
    image: "https://www.phonepe.com/webstatic/14681/static/tarun-bajaj-c7fe41e196f94363b38b8996ba66bb62.png",
    description:
      "Tarun Bajaj is a Non-Executive Independent Director of our Company. He is a fellow member of the Council of Chartered Financial Analysts. He holds a Bachelor’s Degree in Commerce from the University of Delhi, New Delhi, and a Post-Graduate Diploma in Management from the Indian Institute of Management, Ahmedabad. He has over 34 years of experience and was previously associated with the Department of Revenue and Department of Economic Affairs, Ministry of Finance of the Government of India as Secretary, with National Investment and Infrastructure Fund as Director and with the RBI, SEBI, SIDBI, Bank of Maharashtra, Bank of India, General Insurance Corporation Limited, New India Assurance Company Limited and United India Insurance Company Limited as their board member respectively. He is currently associated with Tech Mahindra Limited, Bajaj Finance Limited, The Tata Power Company Limited and Hindustan Unilever Limited as an Independent Director.",
  },
  {
    name: "manish sabharwal",
    post: "Non-Executive Independent Director",
    image: "https://www.phonepe.com/webstatic/14681/static/manish-sabharwal-6db8d1ffb3c4914937b334d68008b8fd.png",
    description:
      "Manish Sabharwal is a Non-Executive Independent Director of our Company. He holds a Bachelor’s Degree in Commerce from the University of Delhi and a Master’s Degree in Business Administration from the Wharton Business School, University of Pennsylvania. He has over 26 years of experience and was previously associated with the Board of the RBI as an Independent Director and is currently associated with Teamlease Services Limited as Vice Chairman, with the Comptroller and Auditor General of India as a member of the advisory board, with National Council of Applied Economic Research as a governing board member, and with New India Foundation as a managing trustee.",
  },
  {
    name: "Zarin Daruwala",
    post: "Non-Executive Independent Director",
    image: "https://www.phonepe.com/webstatic/14681/static/zarin-daruwala-b208b45ec16b1b9eada73a303ac18ba0.png",
    description:
      "Zarin Bomi Daruwala is a Non-Executive Independent Director of our Company. She is a fellow member of the Institute of Chartered Accountants of India and the Institute of Company Secretaries of India. She has over 36 years of experience and was previously associated with ICICI Bank Limited as President and Standard Chartered Bank as Chief Executive Officer – India and South Asia. She is currently associated with Prabhudas Lilladher Advisory Services Limited as the Chief Executive Officer. She has received awards such as 100 Top Most Influential BFSI Leaders, Ladies’ Wing IMC Award for Outstanding Contribution in Banking and Financial Services 2018, multiple Business Today ‘Most Powerful Women in Indian Business’ awards, and the ‘Banking CEO of the Year’ award by The European.",
  },
  {
    name: "leigh hopkins",
    post: "Non-Executive Nominee Director",
    image: "https://www.phonepe.com/webstatic/14681/static/leigh-hopkins-6f7c620291679eeff2b13ad847f45644.png",
    description:
      "Leigh Douglas Hopkins is a Non-Executive Director of our Company and a nominee of WM Digital Commerce Holdings Pte. Ltd. on our Board. He holds a Master of Arts from Wadham College, University of Oxford. He has over 15 years of retail experience and was previously associated with Walmart Inc. as Executive Vice President – international strategy & development.",
  },
  {
    name: "donna morris",
    post: "Non-Executive Nominee Director",
    image: "https://www.phonepe.com/webstatic/14681/static/donna-morris-e64e69a6ad29d3d7d6815e7c93ebc1fb.png",
    description:
      "Donna Catherine Morris is a Non-Executive Director of our Company and a nominee of WM Digital Commerce Holdings Pte. Ltd. on our Board. She holds a Bachelor’s Degree of Arts in Political Science from the Carleton University, Canada. She holds a certificate of professional membership with the Human Resources Professionals Association of Ontario and has been entitled as certified human resource executive by virtue of her membership. She has over 23 years of experience and was on the Board of Directors of the Society for Human Resource Management, USA and is a fellow of the National Academy of Human Resources. She is on the Board of Trustees at Fordham University in New York, USA and on the Board of Directors at Crystal Bridges – Museum of American Art, USA. She was previously associated with Adobe Inc. as Chief Human Resources Officer and Executive Vice President of employee experience and is currently associated with Walmart Inc. as Executive Vice President – global people and Chief People Officer. She has received awards such as, being named in Forbes Future of Work 50 list in 2022, Mass Market Retailing’s “Most Influential Women” in 2024, and a Top 100 HR Tech influencer by Human Resource Executive in 2022.",
  },
  {
    name: "john David rainey",
    post: "Non-Executive Nominee Director",
    image: "https://www.phonepe.com/webstatic/14681/static/john-david-rainey-000e316828bac54d5e9a496b867fb8fe.png",
    description:
      "John David Rainey JR is a Non-Executive Director of our Company and a nominee of WM Digital Commerce Holdings Pte. Ltd. on our Board. He holds a Bachelor’s Degree in Business Administration from the School of Business, Baylor University, Texas, USA and a Master’s Degree in Business Administration from Graduate School, Baylor University, Texas, USA. He has over 28 years of experience and was previously associated as Chief Financial Officer and Executive Vice President – global customer operations at PayPal Holdings, Inc., Executive Vice President and Chief Financial Officer of United Continental Holdings, Inc., and is currently associated with Walmart Inc. as Executive Vice President and Chief Financial Officer.",
  },
  {
    name: "Chris Nicholas",
    post: "Non-Executive Nominee Director (Additional)",
    image: "https://www.phonepe.com/webstatic/14681/static/chris-nicholas-aea750a24aeb5f93ca9f83ef396d3ec0.png",
    description:
      "Chris Nicholas is a Non-Executive Nominee Director (Additional) of our Company. He is President and CEO of Walmart International and leads a team of more than 500,000 associates serving 80 million customers and members per week across 18 countries. He holds a Bachelor of Science with Honors in Management Science from the University of Manchester Institute of Science and Technology and is a Chartered Management Accountant (ACMA). Chris served as President and Chief Executive Officer of Sam’s Club from September 2023 to February 2026. In this role, he led a membership business redefining the retail experience through exclusive value, convenience, and a transformative omnichannel ecosystem. Before his move to Sam’s Club, Chris served as Executive Vice President and Chief Operating Officer for Walmart U.S. where he oversaw all facets of U.S. store operations and the supply chain, including strategy, innovation, automation, distribution and fulfillment center operations, last mile delivery and real estate. Chris joined Walmart in 2018 as Deputy CFO and went on to serve as CFO for Walmart International and then CFO of Walmart U.S. Prior to Walmart, he spent more than 20 years in retail across nine countries, holding senior leadership roles at Tesco, The Salling Group, and the Coles Group—where he helped guide the company through significant transformation within the Australian supermarket sector.",
  },
  {
    name: "sameer nigam",
    post: "Whole-time Director and Chief Executive Officer",
    image: "https://www.phonepe.com/webstatic/14681/static/sameer-nigam-793cafbd4e3997f4383551fd9778b717.png",
    description:
      "Sameer Nigam is the Founder, Whole-time Director and the Chief Executive Officer of our Company. Over the past decade, he has led PhonePe’s journey in building and scaling its digital payments business, and is now driving diversification into multiple other consumer tech sectors (Share.Market and Indus Appstore). He has over 23 years of experience and before founding our Company, he served as Senior Vice President, Engineering, and Vice President, Digital Business, at Flipkart Internet Private Limited. His journey at Flipkart Internet Private Limited started in 2011 when the company acquired his first venture – Mallers Inc. (Mime360). He holds a Master’s Degree in Business Administration from the Wharton Business School (University of Pennsylvania), USA, and a Master’s Degree in Computer Science from the University of Arizona, Tucson, USA. He received the ‘The Fintech Person of the Year – India’ award at the Global Fintech Festival, 2024 and the ‘EY Entrepreneur of the Year 2024 India’ award in the business transformation category.",
  },
  {
    name: "rahul chari",
    post: "Whole-time Director and Chief Technology Officer",
    image: "https://www.phonepe.com/webstatic/14681/static/rahul-chari-f32d8c77ff33502f4aaaa50b3e61c96e.png",
    description:
      "Rahul Chari is the Founder, Whole-time Director and the Chief Technology Officer of our Company. He has spearheaded the technology strategy of the group, building a robust and highly scalable platform. On the back of this extensible architecture, PhonePe Group is now expanding into multiple consumer tech sectors including Share.Market and Indus Appstore, with Rahul continuing to play a pivotal role in the Company’s technological evolution. He has over 24 years of experience and prior to joining the Company, he was associated with Flipkart Internet Private Limited as Vice President of Engineering, and earlier co-founded Mallers Inc. (“Mime360”), a digital media distribution platform. In addition, his career of two plus decades in technology includes engineering roles at technology firms like Cisco Systems (India) Private Limited, Cisco Systems Inc. and Andiamo Systems Inc., where he has filed for multiple patents in the storage area networking space. He holds a Master’s Degree in Science from the Purdue University, USA and a Bachelor’s Degree in Computer Engineering from Sardar Patel College of Engineering, University of Mumbai. He was honoured at India’s CTO Excellence Awards 2024 organised by YourStory.",
  },
];
const founders = [
  {
    name: "Sameer Nigam",
    post: "Founder, Whole-time Director and Chief Executive Officer",
    image: "https://www.phonepe.com/webstatic/14681/static/sameer-nigam-793cafbd4e3997f4383551fd9778b717.png"
  },
  {
    name: "Rahul Chari",
    post: "Founder, Whole-time Director and Chief Technology Officer",
    image: "https://www.phonepe.com/webstatic/14681/static/rahul-chari-f32d8c77ff33502f4aaaa50b3e61c96e.png"
  },
  {
    name: "Burzin Engineer",
    post: "Founder and Chief Reliability Officer",
    image: "https://www.phonepe.com/webstatic/14681/static/burzin-engineer-c43178b69bab10b2b07800b82d99398a.png"
  },
]


const Members = () => {
  const [selectedMember, setSelectedMember] = useState<
    (typeof Board)[number] | null
  >(null);
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    };

    if (selectedMember) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-28">

          <div className="mb-12">
            <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold leading-tight tracking-tight text-[#1d1d1f] md:text-6xl">
              Our Founders
            </h2>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">

            {founders.map((item, index) => (
              <div
                key={item.name}
                className="group relative w-full max-w-[294px] overflow-hidden rounded-lg border border-[#eeeeee] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(95,37,159,0.12)]"
              >
                <div
                  className={`absolute left-0 top-0 h-[3px] w-full ${
                    index % 3 === 0
                      ? "bg-[#5f259f]"
                      : index % 3 === 1
                      ? "bg-[#19c3d1]"
                      : "bg-[#f5a623]"
                  }`}
                />
                <div className="flex justify-center pt-7">
                  <div className="h-[162px] w-[162px] overflow-hidden rounded-full bg-[#eeeeee]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="px-5 pt-6 text-center">

                  <h3 className="text-[22px] font-medium capitalize text-[#333333] transition-colors duration-300 group-hover:text-[#5f259f]">
                    {item.name}
                  </h3>

                  <p className="mx-auto mt-4 min-h-[58px] max-w-[220px] text-center text-[14px] leading-[20px] text-[#7046c1]">
                    {item.post}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
        <div>

          <div className="mb-14">
            <h2 className="text-center text-4xl font-semibold leading-tight tracking-tight text-[#1d1d1f] md:text-6xl">
              Our Board
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-x-6 gap-y-12 sm:grid-cols-2 md:gap-x-7 md:gap-y-16 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-20">

            {Board.map((item, index) => (

              <button
                type="button"
                key={item.name}
                onClick={() => setSelectedMember(item)}
                className={`group relative w-full max-w-[245px] overflow-hidden rounded-lg border border-[#eeeeee] bg-white text-left shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(95,37,159,0.12)] ${
                  index === Board.length - 2
                    ? "lg:col-start-2"
                    : ""
                } ${
                  index === Board.length - 1
                    ? "lg:col-start-3"
                    : ""
                }`}
              >

                {/* Top border */}
                <div
                  className={`absolute left-0 top-0 h-[3px] w-full ${
                    index % 3 === 0
                      ? "bg-[#5f259f]"
                      : index % 3 === 1
                      ? "bg-[#19c3d1]"
                      : "bg-[#f5a623]"
                  }`}
                />

                {/* Image */}
                <div className="flex justify-center pt-6">
                  <div className="h-[125px] w-[125px] overflow-hidden rounded-full bg-[#eeeeee] md:h-[135px] md:w-[135px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 pt-5 text-center">

                  <h3 className="text-lg font-medium capitalize text-[#333333] transition-colors duration-300 group-hover:text-[#5f259f]">
                    {item.name}
                  </h3>

                  <p className="mx-auto mt-4 min-h-[55px] max-w-[185px] text-center text-[12px] leading-[18px] text-[#7046c1]">
                    {item.post}
                  </p>

                </div>

                {/* Arrow */}
                <div className="flex justify-center pb-5 pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b9acd0] text-lg text-[#8c7aa8] transition-all duration-300 group-hover:border-[#5f259f] group-hover:bg-[#5f259f] group-hover:text-white">
                    →
                  </div>
                </div>

              </button>
            ))}

          </div>
        </div>
      </div>
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedMember(null);
            }
          }}
        >

          <div className="relative flex max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              aria-label="Close modal"
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-medium text-gray-600 shadow-md transition-all duration-300 hover:bg-[#5f259f] hover:text-white"
            >
              ✕
            </button>
            <div className="hidden w-[40%] bg-[#f5f2f8] md:flex md:items-center md:justify-center">
              <div className="h-[320px] w-[320px] overflow-hidden rounded-full bg-gray-200">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="relative w-full overflow-y-auto px-7 py-10 md:w-[60%] md:px-10 md:py-12">

              <h1 className="text-3xl font-semibold capitalize leading-tight text-[#222] md:text-4xl">
                {selectedMember.name}
              </h1>

              <h2 className="mt-4 max-w-xl text-base font-medium leading-6 text-[#7046c1]">
                {selectedMember.post}
              </h2>

              <div className="my-6 h-[1px] w-full bg-gray-200" />

              <p className="text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                {selectedMember.description}
              </p>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Members;
