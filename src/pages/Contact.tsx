import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <div className="bg-ocean-bg">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20 text-center">
          <p className="text-[11px] font-sans font-medium uppercase tracking-[2px] text-ocean-primary mb-6">
            Get in Touch
          </p>

          <h2 className="font-display text-[42px] text-navy-dark mb-6">
            Let's Work Together
          </h2>

          <p className="text-lg text-ocean-text leading-relaxed mb-0">
            Whether you have a project in mind, a program that needs rethinking, or just want to explore possibilities, I would love to hear from you.
          </p>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <div className="space-y-6 mb-16">
          <div className="bg-white border border-[#CCDEEa] rounded-xl p-8">
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-[#1A7AAF]" />
            </div>
            <h3 className="font-sans font-semibold text-lg text-navy-dark mb-2">
              Email
            </h3>
            <a
              href="mailto:uma.avadh@gmail.com"
              className="text-[#1A7AAF] hover:text-ocean-dark transition-colors text-lg font-medium inline-block mb-3"
            >
              uma.avadh@gmail.com
            </a>
            <p className="text-[15px] text-ocean-text">
              Best for project inquiries and detailed discussions.
            </p>
          </div>

          <div className="bg-white border border-[#CCDEEa] rounded-xl p-8">
            <div className="flex justify-center mb-4">
              <Linkedin className="w-8 h-8 text-[#1A7AAF]" />
            </div>
            <h3 className="font-sans font-semibold text-lg text-navy-dark mb-2">
              LinkedIn
            </h3>
            <a
              href="https://linkedin.com/in/umaavadhanula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A7AAF] hover:text-ocean-dark transition-colors text-lg font-medium inline-block mb-4"
            >
              linkedin.com/in/umaavadhanula
            </a>
            <div className="mb-3">
              <a
                href="https://linkedin.com/in/umaavadhanula"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1A7AAF] text-white px-7 py-3 rounded-md font-sans font-medium hover:bg-ocean-dark transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
            <p className="text-[15px] text-ocean-text">
              Connect professionally and view my full work history.
            </p>
          </div>
        </div>

          <p className="font-display italic text-[20px] text-[#0D2B40] leading-relaxed">
            Every great learning program starts with a conversation. Let's start ours.
          </p>
        </div>
      </div>
    </>
  );
}
