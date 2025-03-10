import React from "react";
import {
  Heart,
  Phone,
  Clock,
  DollarSign,
  Users,
  Coffee,
  CheckCircle,
  Star,
  ArrowRight,
  Instagram,
  Facebook,
} from "lucide-react";

function App() {
  return (
    <div className="font-sans max-w-full mx-auto">
      {/* Hero Section */}
      <section className="relative w-full">
        <div
          className="absolute inset-0 bg-cover bg-center w-full"
          style={{
            backgroundImage: "url('/images/heroimage.webp')",
            filter: "brightness(0.7)",
          }}
        ></div>
        <div className="relative container mx-auto px-6 md:px-8 pt-4 md:pt-6">
          <div className="flex items-center">
            <img
              src="/images/logo.webp"
              alt="Haybales & Chandeliers Logo"
              className="h-12 md:h-16"
            />
          </div>
        </div>
        <div className="relative container mx-auto px-6 md:px-8 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center min-h-[90vh] md:min-h-0 justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-4 md:mb-6 max-w-4xl">
            Your vision brought to life – without the stress (or the huge price
            tag)
          </h1>
          <div className="flex flex-col items-center">
            <a
              href="https://wa.me/YOURNUMBER?text=I'm%20interested%20in%20your%20wedding%20planning%20services."
              target="_blank"
              className="bg-[#ebd2cd] hover:bg-opacity-90 text-black text-base md:text-lg font-medium px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center mb-4 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Phone size={24} className="mr-3" />
              Book Your Free Planning Session Now!
            </a>
            <p className="text-white font-medium bg-black bg-opacity-70 px-4 py-2 rounded-full">
              <Clock size={16} className="inline mr-2" />
              Only 5 Spots Left!
            </p>
            <ul className="text-[10px] md:text-xs text-white opacity-80 mt-4 space-y-1 text-center max-w-xs">
              <li>
                • Personalized guidance, tailored for your dream wedding💍
              </li>
              <li>
                • Zero pressure, no pushy sales tactics— just honest advice 🕊️
              </li>
              <li>• Free Vendor Guide + Exclusive Booking Perks! 🎁</li>
            </ul>
          </div>
        </div>
      </section>
      {/* What We Do & Our Previous Work */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Previous Work */}
            <div className="order-1 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Our previous work
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <div
                  className="bg-white p-3 shadow-md rounded-sm transform rotate-1 transition-all duration-300 hover:rotate-0 hover:shadow-lg"
                  style={{ maxWidth: "220px" }}
                >
                  <img
                    src="/images/previouswork10.webp"
                    alt="Wedding Setup"
                    className="w-full h-auto object-cover"
                  />
                  <div className="h-6"></div>
                </div>
                <div
                  className="bg-white p-3 shadow-md rounded-sm transform rotate-1 transition-all duration-300 hover:rotate-0 hover:shadow-lg"
                  style={{ maxWidth: "220px" }}
                >
                  <img
                    src="/images/previouswork4.webp"
                    alt="Wedding Setup"
                    className="w-full h-auto object-cover"
                  />
                  <div className="h-6"></div>
                </div>
                <div
                  className="bg-white p-3 shadow-md rounded-sm transform -rotate-1 transition-all duration-300 hover:rotate-0 hover:shadow-lg"
                  style={{ maxWidth: "220px" }}
                >
                  <img
                    src="/images/previouswork5.webp"
                    alt="Wedding Decoration"
                    className="w-full h-auto object-cover"
                  />
                  <div className="h-6"></div>
                </div>
                <div
                  className="bg-white p-3 shadow-md rounded-sm transform -rotate-1 transition-all duration-300 hover:rotate-0 hover:shadow-lg"
                  style={{ maxWidth: "220px" }}
                >
                  <img
                    src="/images/previouswork6.webp"
                    alt="Wedding Decoration"
                    className="w-full h-auto object-cover"
                  />
                  <div className="h-6"></div>
                </div>
                <div
                  className="bg-white p-3 shadow-md rounded-sm transform -rotate-1 transition-all duration-300 hover:rotate-0 hover:shadow-lg"
                  style={{ maxWidth: "220px" }}
                >
                  <img
                    src="/images/previouswork9.webp"
                    alt="Wedding Decoration"
                    className="w-full h-auto object-cover"
                  />
                  <div className="h-6"></div>
                </div>
              </div>
            </div>

            {/* What We Do */}
            <div className="flex flex-col justify-center order-2 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                How we've helped brides like you...
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-4">
                From intimate ceremonies to GRAND celebrations, we've made DREAM
                weddings come to life. ✨
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                Every detail, from decor to coordination, is handled with care.
                So you can RELAX and get that perfect, candid shot—your
                partner’s eyes lighting up as you take those first steps down
                the aisle, surrounded by your loved ones... 💖
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Over 200 Couples Recommend Us & Why Brides Love Us (Combined) */}
      <section className="bg-[#ebd2cd] bg-opacity-10 py-16">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-3">
            Why 200+ UK Couples Recommend Us...
          </h2>
          <p className="text-xl text-center mb-12">
            (& Why <em>brides</em> specially Love Us)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-[#ebd2cd] bg-opacity-20 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-[#ebd2cd] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Coffee size={28} className="text-black" />
              </div>
              <h3 className="text-xl font-medium mb-2">Real human support</h3>
              <p className="text-gray-700">
                Personal touch, not a big corporate service.
              </p>
            </div>

            <div className="bg-[#ebd2cd] bg-opacity-20 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-[#ebd2cd] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <DollarSign size={28} className="text-black" />
              </div>
              <h3 className="text-xl font-medium mb-2">Transparent pricing</h3>
              <p className="text-gray-700">
                No hidden fees, full clarity upfront.
              </p>
            </div>

            <div className="bg-[#ebd2cd] bg-opacity-20 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-[#ebd2cd] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Users size={28} className="text-black" />
              </div>
              <h3 className="text-xl font-medium mb-2">Proven success</h3>
              <p className="text-gray-700">Over 200 happy couples in the UK.</p>
            </div>

            <div className="bg-[#ebd2cd] bg-opacity-20 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-[#ebd2cd] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Coffee size={28} className="text-black" />
              </div>
              <h3 className="text-xl font-medium mb-2">Stress-free process</h3>
              <p className="text-gray-700">
                Step by Step guidance to make sure everything is tailored to
                your liking.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500">Tammy Jackson, 2022</div>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                "All our guests commented on how beautiful our venue looked. If
                you are thinking of booking these guys, don't hesitate as you
                will not be disappointed. Punctual, friendly & approachable"
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  Helen Sullivan, 2020
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                "They will go above and beyond to meet all your needs and
                desires. Loved it!!!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-[#ebd2cd] bg-opacity-10 py-16">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
            What You Get
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            Book your free consultation today and receive these exclusive
            benefits
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-[#ebd2cd] mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-xl font-medium mb-3">
                FREE Wedding Planning Session
              </h3>
              <p className="text-gray-700">
                A full hour of personalized planning to understand your vision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-[#ebd2cd] mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-xl font-medium mb-3">
                FREE Gloucestershire Vendor Guide
              </h3>
              <p className="text-gray-700">
                Includes top vendors, best deals & recommendations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-[#ebd2cd] mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-xl font-medium mb-3">
                Exclusive Booking Bonus
              </h3>
              <p className="text-gray-700">
                Choose between a Free Audio Guestbook OR 20% Blue Light Discount
                on ALL Decor Rentals.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/YOURNUMBER?text=I'm%20interested%20in%20your%20wedding%20planning%20services."
              target="_blank"
              className="bg-black hover:bg-opacity-80 text-white text-lg font-medium px-8 py-4 rounded-full inline-flex items-center transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Phone size={20} className="mr-3" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Simple Pricing & Clear Process */}
      <section className="bg-[#ebd2cd] bg-opacity-10 py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">
                Transparent pricing
              </h2>
              <div className="bg-[#ebd2cd] bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-2xl font-medium mb-4">
                  Decor &amp; planning Services
                </h3>
                <p className="text-lg mb-4">
                  Ranging from <span className="font-bold">£750 - £3000</span>
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                    />
                    <span>No hidden fees or surprise costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Customizable packages to fit your budget</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Flexible payment plans available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Free initial consultation with no obligation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">
                Simple Onboarding Process
              </h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-[#ebd2cd] w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Book Free Planning Session
                    </h3>
                    <p className="text-gray-700">
                      No pressure, just guidance! We'll listen to your vision
                      and ideas.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-[#ebd2cd] w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      We Plan Everything Together
                    </h3>
                    <p className="text-gray-700">
                      Ideas, vendors, & decor sorted! We'll create a
                      comprehensive plan.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-[#ebd2cd] w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Road to the big day
                    </h3>
                    <p className="text-gray-700">
                      Changes, Confirmations, Coordination - we handle it all!
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-[#ebd2cd] w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      You Relax While We Bring Your Dream to Life
                    </h3>
                    <p className="text-gray-700">
                      We handle everything! You can focus on enjoying your
                      special day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Now CTA */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to start planning your dream wedding?
          </h2>
          <a
            href="https://wa.me/YOURNUMBER?text=I'm%20interested%20in%20your%20wedding%20planning%20services."
            target="_blank"
            className="bg-[#ebd2cd] hover:bg-opacity-90 text-black text-lg font-medium px-8 py-4 rounded-full inline-flex items-center transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Phone size={20} className="mr-3" />
            Contact Us
          </a>
        </div>
      </section>

      {/* Beautiful Weddings Need Beautiful Details */}
      <section className="bg-[#ebd2cd] bg-opacity-20 py-16">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
            Beautiful weddings need beautiful details
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Planning a wedding is stressful, but finding the perfect decor
            doesn't have to be. We offer stunning decor to bring your vision to
            life—all at affordable prices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/images/IMG_0172.webp"
                alt="Wedding Table Setup"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="/images/image2beautfiul.webp"
                alt="Flowers and Chairs"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Limited Time Bundle Offers */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Limited-Time Bundle Offers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#ebd2cd] bg-opacity-20 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-bold mb-4 text-center">
                Budget
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-black mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Up to 50 Organza Chair Sashes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-black mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Up to 5 Table Runners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-black mr-2 mt-1 flex-shrink-0"
                  />
                  <span>LOVE Letters</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-black mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Postbox</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-black mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Audio Guestbook</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-black mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Aisle Runner</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-black mr-2 mt-1 flex-shrink-0"
                  />
                  <span>2 x Rose Trees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-black mr-2 mt-1 flex-shrink-0"
                  />
                  <span>2 Hours full sized magic mirror for £175</span>
                </li>
              </ul>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">£500</span>
              </div>
              <div className="text-center">
                <a
                  href="https://wa.me/YOURNUMBER?text=I'm%20interested%20in%20your%20wedding%20desore%20packages."
                  target="_blank"
                  className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center justify-center transform hover:scale-105 transition-all duration-300"
                >
                  <Phone size={18} className="mr-2" />
                  Book Now
                </a>
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-bold mb-4 text-center">
                Premium
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>100 Chair Sashes (Any style)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Up to 10 Table Runners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Love Letters</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Postbox</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Video Guestbook</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Aisle Runner</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Silver Easel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Prosecco Wall</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Doughnut Wall</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>2 x Rose Trees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Up to 10 Silver Lanterns with LED Candles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Sweet Cart (No Sweets)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Flower Wall (Pink or Ivory)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>2 Hours Full Sized Magic Mirror</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-[#ebd2cd] mr-2 mt-1 flex-shrink-0"
                  />
                  <span>
                    Additional 2 hours full sized magic mirror for £175
                  </span>
                </li>
              </ul>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">£1200</span>
              </div>
              <div className="text-center">
                <a
                  href="https://wa.me/YOURNUMBER?text=I'm%20interested%20in%20your%20wedding%20desore%20packages."
                  target="_blank"
                  className="bg-[#ebd2cd] text-black px-6 py-3 rounded-full inline-flex items-center justify-center transform hover:scale-105 transition-all duration-300"
                >
                  <Phone size={18} className="mr-2" />
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#ebd2cd] py-16">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Book your free wedding planning session
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step to bring your vision to life{" "}
          </p>
          <div className="flex flex-col items-center">
            <a
              href="https://wa.me/YOURNUMBER?text=I'm%20interested%20in%20your%20wedding%20planning%20services."
              target="_blank"
              className="bg-black hover:bg-opacity-80 text-white text-xl font-medium px-10 py-5 rounded-full inline-flex items-center mb-6 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Phone size={24} className="mr-3" />
              Contact Us Now
            </a>
            <p className="font-medium text-black">
              <Clock size={18} className="inline mr-2" />
              Only 5 Free Spots Left – Don't miss out!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img
                src="/images/logo.webp"
                alt="Haybales & Chandeliers Logo"
                className="h-12 mb-4"
                loading="lazy"
              />
              <p className="text-sm text-gray-400">
                Over 200 Dream Weddings Brought to Life.
              </p>
              <div className="flex mt-4 space-x-4">
                <a
                  href="https://www.instagram.com/haybalesandchandeliers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ebd2cd] transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/HaybalesAndChandeliers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ebd2cd] transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">
                <a
                  href="tel:+447368203447"
                  className="text-[#ebd2cd] hover:underline"
                >
                  +44 7368 203447
                </a>
              </p>
              <p className="text-sm text-gray-400 mb-2">
                © 2025 Haybales & Chandeliers. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                <a
                  href="https://www.freeprivacypolicy.com/live/aba10e91-e336-4056-af89-7c2f9d21690a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ebd2cd] transition-colors"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Call Button (Fixed) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a
          href="tel:+447368203447"
          className="bg-[#ebd2cd] text-black w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
}

export default App;
