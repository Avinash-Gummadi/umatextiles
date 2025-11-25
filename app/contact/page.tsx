import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
                    We&apos;d love to hear from you. Visit our store or send us a message.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-serif font-bold">Visit Our Store</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium">Address</h3>
                                    <p className="text-muted-foreground">
                                        123 Textile Market Road,<br />
                                        Near City Center, Hyderabad,<br />
                                        Telangana - 500001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium">Phone</h3>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-muted-foreground">info@umatextiles.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium">Opening Hours</h3>
                                    <p className="text-muted-foreground">
                                        Mon - Sat: 10:00 AM - 9:00 PM<br />
                                        Sun: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
                        {/* Placeholder for Map */}
                        <div className="absolute inset-0 flex items-center justify-center bg-muted-foreground/10">
                            <span className="text-muted-foreground">Map View Placeholder</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card p-6 md:p-8 rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-serif font-bold mb-6">Send a Message</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <Input id="name" placeholder="Your name" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" type="email" placeholder="Your email" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                            <Input id="subject" placeholder="Inquiry about..." />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <Textarea
                                id="message"
                                placeholder="How can we help you?"
                                className="min-h-[150px]"
                            />
                        </div>

                        <Button size="lg" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
