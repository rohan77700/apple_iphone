import { footerLinks } from "../constants";

const Footer = () => {
    return (
        <footer className="py-5 sm:px-10 px-5">
            <div className="screen-max-width">
                <div>
                    <p className="font-semibold text-gray text-xs">
                        More ways to shop: {' '}
                        <span className="text-blue underline">
                            Find an Apple Store
                        </span>{' '} 
                        or {' '}
                        <span className="text-blue underline">
                            other retailer
                        </span>{' '}
                        near you. Or call 1000-800-0000-MY-APPLE.
                    </p>
                </div>

                <div className="w-full h-[1px] my-5 bg-neutral-700" />

                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <p className="text-gray text-xs font-semibold">
                        Copyright © 2024 Apple Inc. All rights reserved.
                    </p>
                    <div className="flex">
                        {footerLinks.map((link, i) => (
                            <p 
                            key={link}
                            className="text-gray text-xs font-semibold">
                                {link}{' '}
                                {i !== footerLinks.length - 1 && (
                                    <span className="mx-2"> | </span>
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;