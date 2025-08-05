import Image from "next/image";
import { FiCheck } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="py-12 md:py-24 px-6 md:px-0">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-0 md:px-8">
        <div className="space-y-8">
          <h2 className="text-3xl">
            Safety of your data is our
            <span className="font-semibold italic text-blue-500 whitespace-nowrap"> top priority.</span>
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FiCheck className="mr-4 text-blue-500" />
              <span>Multi-level security checks</span>
            </li>
            <li className="flex items-center">
              <FiCheck className="mr-4 text-blue-500" />
              <span>Multiple data backups</span>
            </li>
            <li className="flex items-center">
              <FiCheck className="mr-4 text-blue-500" />
              <span>Stringent data privacy policies</span>
            </li>
          </ul>
          <a
            href="/company/security"
            target="_blank"
            className="inline-block px-6 py-2 border-2 border-blue-500 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Read more
          </a>
        </div>
        <div className="flex items-center justify-end md:justify-center">
          <Image
            src="/security_1.png"
            alt="Security"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Certifications Row */}
      <div className="flex flex-col md:flex-row p-6 mt-12 md:space-x-6 space-y-6 md:space-y-0">
        <div className="flex flex-col items-center text-center w-full md:w-1/4">
          <Image src="/file.png" alt="file" width={60} height={60} />
          <span className="mt-2">256-bit encryption</span>
        </div>
        <div className="flex flex-col items-center text-center w-full md:w-1/4">
          <Image src="/iso.png" alt="file" width={60} height={60} />
          <span className="mt-2">ISO 27001 certified</span>
        </div>
        <div className="flex flex-col items-center text-center w-full md:w-1/4">
          <Image src="/hipaa.png" alt="file" width={60} height={60} />
          <span className="mt-2">HIPAA compliant data centers</span>
        </div>
        <div className="flex flex-col items-center text-center w-full md:w-1/4">
          <Image src="/dsci.png" alt="file" width={60} height={60} />
          <span className="mt-2">DSCI member</span>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-around gap-10 bg-white shadow-md w-full p-6">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Instant appointment with doctors. <span className="text-blue-500">Guaranteed.</span>
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FiCheck className="text-blue-500 mr-3" />
              <span><strong>100,000</strong> Verified doctors</span>
            </li>
            <li className="flex items-center">
              <FiCheck className="text-blue-500 mr-3" />
              <span><strong>3M+</strong> Patient recommendations</span>
            </li>
            <li className="flex items-center">
              <FiCheck className="text-blue-500 mr-3" />
              <span><strong>25M</strong> Patients/year</span>
            </li>
          </ul>
          <a
            href="/Bangalore/doctors"
            target="_blank"
            className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
          >
            Find me the right doctor
          </a>
        </div>
        <div className="flex justify-center md:justify-center">
          <video
            className="p-auto mx-auto"
            poster="/app-preview.jpg"
            width="250"
            height="480"
            autoPlay
            muted
            loop
          >
            <source src="https://www.practostatic.com/web-assets/home/assets/videos/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full p-6 mt-12">
        <div className="flex justify-center md:justify-center">
          <Image
            src="/dashboard.png"
            alt="Dashboard"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Leading Healthcare Providers. <span className="text-blue-500">Trust us for Business.</span>
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FiCheck className="text-blue-500 mr-3" />
              <span>Get seen by <strong>25M+</strong> patients on Practo.com</span>
            </li>
            <li className="flex items-center">
              <FiCheck className="text-blue-500 mr-3" />
              <span>The most advanced software for clinics and hospitals</span>
            </li>
            <li className="flex items-center">
              <FiCheck className="text-blue-500 mr-3" />
              <span>State of the art business analytics for enterprises</span>
            </li>
          </ul>
          <a
            href="/Bangalore/doctors"
            target="_blank"
            className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
          >
            Learn more
          </a>
        </div>

      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-around gap-10 bg-white shadow-md w-full p-6">

        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Download the ParQ app
          </h2>

          <ul className="space-y-3 text-gray-700 mb-6">
            {[
              'Book appointments and lab tests',
              'Order parking passes or tokens',
              'Consult parking staff online',
              'Set parking reminders',
              'Store parking records',
              'Get parking tips',
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FiCheck className="text-blue-500 mr-3" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* App Store Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" rel="noopener noreferrer">
              <Image
                src="/gplay.png"
                alt="Get it on Google Play"
                width={140}
                height={45}
              />
            </a>
            <a href="#" rel="noopener noreferrer">
              <Image
                src="/appstore.png"
                alt="Download on the App Store"
                width={140}
                height={45}
              />
            </a>
          </div>
        </div>
        <div className="relative w-[300px] h-[360px] md:w-[400px] md:h-[480px]">
          <Image
            src="/app.png"
            alt="App Preview"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;
