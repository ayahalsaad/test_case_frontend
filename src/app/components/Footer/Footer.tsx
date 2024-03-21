import React from "react";

export default function Footer() {
  return (
    <div className="w-full p-6 bg-color">
      <div className="container mx-auto">
        <div className="flex justify-center items-center space-x-7">
          <a
            className="serif glb-footer__link glb-footer__link--l1 font-SecondaryFont hover:text-colorNine"
            href="/gx/en/about/office-locations.html"
            aria-label="PwC office locations"
          >
            PwC Office Locations
          </a>
          <a
            className="serif glb-footer__link glb-footer__link--l1 font-SecondaryFont hover:text-colorNine"
            href="/gx/en/site-map.html"
            aria-label="Site map"
          >
            Site Map
          </a>
          <a
            className="serif glb-footer__link glb-footer__link--l1 font-SecondaryFont hover:text-colorNine"
            href="/gx/en/global/forms/contactUs.en_gx.html?source=footer&parentPagePath=/content/pwc/gx/en"
            aria-label="Contact us"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}
