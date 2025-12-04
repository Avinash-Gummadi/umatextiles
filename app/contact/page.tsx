import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
    title: "Contact Us | Uma Textiles",
    description: "Get in touch with Uma Textiles and Fancy.",
};

export default function ContactPage() {
    return (
        <div className="container px-4 md:px-6 py-12 md:py-16">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <h1 className="text-3xl md:text-4xl font-serif font-bold">Contact Us</h1>
                <p className="text-muted-foreground max-w-2xl">
                    Visit our store to explore our exclusive collection.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-serif font-bold">Store Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-1">Address</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        123 Textile Market Road,<br />
                                        Near City Center, Hyderabad,<br />
                                        Telangana - 500001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                                <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-1">Phone</h3>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                                <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-1">Email</h3>
                                    <p className="text-muted-foreground">info@umatextiles.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                                <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-1">Opening Hours</h3>
                                    <p className="text-muted-foreground">
                                        Mon - Sat: 10:00 AM - 9:00 PM<br />
                                        Sun: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="h-full min-h-[400px] w-full rounded-lg overflow-hidden border shadow-sm bg-muted">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.1!2d79.840439!3d14.1438862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ce3e623eccb77%3A0x6ce9eb2091cb78e3!2sVinayaka%20Temple!5e0!3m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "400px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Uma Textiles Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
