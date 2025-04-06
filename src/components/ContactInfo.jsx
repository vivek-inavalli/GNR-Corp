import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-[#022B45] py-12 px-4 flex justify-center">
      <div className="max-w-4xl w-full grid md:grid-cols-3 gap-8 text-white text-center">
        <div>
          <Mail size={32} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-sm mb-1">
            For inquiries about the event, feel free to reach out!
          </p>
          <p className="font-semibold">hello@gnrcorp.com</p>
        </div>
        <div>
          <Phone size={32} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-sm mb-1">
            Call us for immediate assistance regarding the event.
          </p>
          <p className="font-semibold">+1 (555) 123-4567</p>
        </div>
        <div>
          <MapPin size={32} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Office</h3>
          <p className="text-sm mb-1">
            Visit us at our office for more detailed information.
          </p>
          <p className="font-semibold">
            456 Event Ave, Hyderabad, Telangana 500001 IN
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
