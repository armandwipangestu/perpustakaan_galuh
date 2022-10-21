import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer class="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2022{" "}
          <a href="" class="hover:underline">
            Arman™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
