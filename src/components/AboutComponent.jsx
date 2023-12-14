import React from "react";

const AboutComponent = () => {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white lg:py-[5rem]">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center w-[96%] lg:h-[80%] h-full">

        <div className="w-full py-8">
          <p className="text-center lg:text-4xl text-3xl font-bold underline ">About</p>
        </div>

        <p className="container mx-auto text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere vel
          excepturi recusandae odit, cupiditate amet. Perferendis tenetur aut
          laudantium accusantium maiores consequuntur, asperiores voluptate,
          quaerat pariatur odit cupiditate eum eligendi vel, similique deleniti
          officia. Hic nisi repudiandae quod. Facilis veritatis ipsam a
          consequatur aliquid tenetur labore sed eligendi cupiditate nam.
        </p>

        <br />
        <p className="container mx-auto text-left ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          soluta sit corporis repellendus illum modi amet id nam! Rerum
          doloremque repellendus eius, consequatur voluptate nam ab itaque natus
          officia quam ut ipsum eos velit dolorum placeat neque, sapiente
          mollitia eligendi earum quisquam voluptas. Perspiciatis laudantium
          nihil itaque! Dolores, eligendi quidem.
        </p>

      </div>
    </div>
  );
};

export default AboutComponent;
