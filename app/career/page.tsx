import HeroImage from "../components/common/heroImage";
import CommonParagraph from "../components/common/paragraph";
import Title from "../components/common/title";
import ContactForm from "../components/ContactForm";
function Career() {
  return (
    <div>
      <HeroImage
        title="Careers"
        description="Do you want to learn more about Courtney? Our team is looking for people who want to work on interesting international projects, develop and learn new skills, and share what they've learned with others."
      />
      <div className="max-w-[1600px] mx-auto">
        <Title title="Please join us" />
        <CommonParagraph paragraph="Take a look at the open positions below." />

        <div className="w-[55%] mt-6 mb-24">
          <CommonParagraph paragraph="If none of them suit you, or you feel you could help us in other ways, please fill out the form below or contact us directly at carrers@courtney.lk" />
        </div>
      <div>
        <h1 className="text-font_28 font-semiBold text-textColor">Developers</h1>
      </div>
      <div className=" rounded-xl  py-12 px-10  bg-bgGrayColor">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ROLE SECTION */}
        <div>
          <h3 className="text-font_18 font-semiBold text-textColor mb-2 uppercase">
            Role
          </h3>
          <hr className="border-gray-200 my-8" />
          <h2 className="text-font_28 font-semiBold text-textColor mb-3">
            Senior Web Full Stack Developer
          </h2>
          <p className="text-font_18 font-regular text-textColor">
            Seniority in development is not just about how much time you have
            already spent behind the computer screen. It's the way you think,
            how you approach problems and their solutions, the responsibility
            you take on and feel.
          </p>

          <div className="mt-6 flex gap-4">
            <button 
                className="w-[192px] h-[54px] bg-gradient-to-r from-orange to-yellow text-white font-semiBold text-font_16 rounded"
                >
              APPLY NOW →
            </button>
            <button className="w-[192px] h-[54px] bg-buttonBg text-textColor font-semiBold text-font_16 rounded">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div>
        <h3 className="text-font_18 font-semiBold text-textColor mb-2 uppercase">
        Skills
          </h3>
          <hr className="border-gray-200 my-8" />
          <div className="flex flex-wrap gap-3">
            {[
              "Node.js",
              "React js",
              "Vue js",
              "Typescript",
              "Javascript",
              "Next JS",
              "Amplify",
              "AWS",
              "Terraform",
              "C# and .NET",
              "GraphQL",
              "Serverless Framework",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-bgYellow text-textColor font-semiBold font-font_16 px-4 py-1.5 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* LOCATION SECTION */}
        <div>
        <h3 className="text-font_18 font-semiBold text-textColor mb-2 uppercase">
        Location
          </h3>
          <hr className="border-gray-200 my-8" />
          <ul className="space-y-4 ">
            <li>
              <span className="font-semiBold text-textColor font-font_18">Remote</span>,
            </li>
            <li>
              <span className="font-semiBold text-textColor font-font_18">Ostrava</span> 
              <span className="font-regular text-textColor font-font_18">- Czech Republic,</span>
            </li>
            <li>
              <span className="font-semiBold text-textColor font-font_18">Brno</span>
              <span className="font-regular text-textColor font-font_18">- Czech Republic,</span>
            </li>
            <li>
              <span className="font-semiBold text-textColor font-font_18">Barcelona</span> 
              <span className="font-regular text-textColor font-font_18">- Spain,</span>
            </li>
            <li>
              <span className="font-semiBold text-textColor font-font_18">Prague</span> 
              <span className="font-regular text-textColor font-font_18">- Czech Republic,</span>
            </li>
            <li>
              <span className="font-semiBold text-textColor font-font_18">Zlín</span> 
              <span className="font-regular text-textColor font-font_18">- Czech Republic</span>
            </li>
          </ul> 
        </div>
      </div>
    </div>

      </div>
      <ContactForm />

    </div>
  )
}

export default Career