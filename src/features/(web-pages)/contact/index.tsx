import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="bg-[#F9F9FB] min-h-[calc(100vh-81px)] py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="space-y-10 mt-6 lg:mt-12">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#1F2937] leading-[1.1]">
                Get in <br className="hidden md:block" />
                touch with us
              </h1>
              <p className="text-[#474D66] text-lg md:text-xl leading-relaxed max-w-[600px]">
                We are here to help! Whether you have a question about our service,
                need assistance with your account, or want to provide feedback,
                our team is ready to assist you
              </p>
            </div>

            <div className="space-y-2 flex flex-wrap gap-10 ">
              <div>
                <h3 className="text-[#535353] font-normal text-sm ">Office Address</h3>
                <p className="text-[16px] font-medium text-[#535353]">
                  42 Marine Parade, Australia
                </p>
              </div>
              <div>
                <h3 className="text-[#535353] font-normal text-sm">Email</h3>
                <p className="text-[16px] font-medium text-[#535353]">
                  info@8pxlstudio.com
                </p>
              </div>
              <div>
                <h3 className="text-[#535353] font-normal text-sm">Phone Number</h3>
                <p className="text-[16px] font-medium text-[#535353]">
                  +0123456789342
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Form Card */}
          <div className="relative">
            {/* Background decorative element (optional, seen subtle in some premium designs) */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
