import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterSite = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <section className="w-full dark:bg-gray-900">
            <div className="p-6">
                <Footer container className="max-w-[1920px] mx-auto">
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright className="font-bold" href="#" by="Andral Orelus" year={year} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                        </div>
                    </div>
                </Footer>
            </div>

        </section>
    )
}

export default FooterSite