import React from "react";
import { Link } from "react-router-dom";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight, 
  MapPin 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-white tracking-wider uppercase">
              Sling Bag
            </h1>
            <p className="text-sm leading-relaxed text-gray-500">
              Redefining modern carry with trendable, user-friendly designs. 
              Quality meets innovation in every stitch.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <SocialIcon icon={<Instagram size={20} />} href="#" />
              <SocialIcon icon={<Twitter size={20} />} href="#" />
              <SocialIcon icon={<Linkedin size={20} />} href="#" />
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/shop" text="New Arrivals" />
              <FooterLink to="/about" text="Our Story" />
              <FooterLink to="/contact" text="Contact Support" />
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-600 shrink-0" />
                <span>123 Fashion Ave, <br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-600 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600 shrink-0" />
                <span>support@slingbag.com</span>
              </li>
            </ul>
          </div>

      

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-900 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Sling Bag. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

// --- Helper Components for clean code ---

function SocialIcon({ icon, href }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ to, text }) {
  return (
    <li>
      <Link 
        to={to} 
        className="text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
      >
        <span className="w-0 group-hover:w-2 h-[1px] bg-white transition-all duration-300"></span>
        {text}
      </Link>
    </li>
  );
}