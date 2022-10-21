import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2022{" "}
          <a href="" className="hover:underline">
            Arman™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
