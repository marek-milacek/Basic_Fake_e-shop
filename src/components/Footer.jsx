const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-600 border-t border-slate-200">
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyShop. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <span className="hover:text-slate-900 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-slate-900 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;