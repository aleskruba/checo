import Image from "next/image";
import Man from "@/public/man1.png";
import Link from "next/link";

function page() {
  return (
    <div className="text-left px-0 md:px-6 max-w-6xl mx-auto mt-8">
      <div className="flex flex-col md:flex-row md:justify-between gap-4 ">
        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="flex items-center text-lg">
          
            <span className="font-bold text-2xl">Aleš Kruba</span>
          </div>

          <div className="flex items-center">
            <Link href="mailto:aleskruba@dokram.com" className="text-lg hover:text-blue-500">
              ales.aprendercheco@gmail.com
            </Link>
          </div>

          <div className="flex items-center">
            <p className="text-lg">Brno, Czech Republic</p> {/* Agregué una línea adicional para ubicación escrita */}
          </div>
        </div>

    {/*     <div className="w-[100%] md:w-[70%] md:px-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-6 rounded-lg shadow-md">
          <div className="overflow-hidden rounded-lg shadow-md border border-blue-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26542.852359488792!2d16.565107720384307!3d49.19506020783753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712946e3443f6fb%3A0x400af0f661c9c70!2sBrno%2C%20Czech%20Republic!5e0!3m2!1sen!2scz!4v1696072828923!5m2!1sen!2scz"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default page;
