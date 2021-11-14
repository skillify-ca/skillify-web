import { ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BudgetRules = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={`bg-green-300 border-4 border-black w-full sm:w-2/3`}>
      <h1 className="bg-green-800 align-middle text-center text-white text-3xl ">
        -Rules-
      </h1>
      <div className="bg-green-200 m-8 text-center">
        <Slider {...settings}>
          <div className="p-4">
            <div className="text-3xl mb-8">Buy a Home</div>
            <img
              className="w-64 h-64 align-middle mx-auto mb-8"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/15152/house-home-residence-clipart-md.png"
            />
            <div className="">
              {" "}
              <ul className="list-disc">
                <li>Your home must be big enough for your family.</li>
                <li>Two parents can share a room</li>
                <li>Each child must have his or her own room</li>
                <li>
                  You must pay for gas, electricity, and water in your home.
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-8 "> Buy a Car</div>
            <img
              className="w-64 h-64 align-middle mx-auto mb-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EKx8p_hGU9mKTylqObmeLK1dncuZOypUta8sKG4UrHAkXq9vPiXO7lOqenW9eQjDi_Y&usqp=CAU"
            />
            <ul className="list-disc">
              <li>You can choose to buy a new or used car.</li>
              <li>Each family must have at least one car.</li>
              <li>You may buy a car for each parent if you choose.</li>
              <li>Children may not have a car.</li>
              <li>All cars must have insurance.</li>
              <li>Each car also must have gasoline.</li>
            </ul>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-8 ">Buy TV and Internet</div>
            <img
              className="w-64 h-64 align-middle mx-auto mb-8"
              src="https://www.kindpng.com/picc/m/3-32088_television-clip-art-transparent-background-tv-clipart-hd.png"
            />
            <div className="col-span-2 col-start-0">
              {" "}
              You can purchase TV/Internet service; however, it is NOT required.
            </div>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-8">Buy a Phone</div>
            <img
              className="w-64 h-64 align-middle mx-auto mb-8"
              src="https://www.pngitem.com/pimgs/m/210-2103810_phone-vector-png-mobile-phone-clipart-transparent-png.png"
            />
            <ul className="list-disc">
              <li>All adults must have a phone. </li>
              <li>
                It is not necessary for children to have phones, but you may buy
                one for your children if you choose to do so.
              </li>
            </ul>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-8 ">Buy Groceries</div>
            <div className="col-span-2 col-start-0">
              <img
                className="w-64 h-64 align-middle mx-auto mb-8"
                src="/images/grocerybag.png"
              />
              Use the chart to determine how much food will cost for each person
              in your family
            </div>
          </div>
          <div className="p-4">
            <div className="text-3xl  mb-8"> The Extras</div>
            <img
              className="w-64 h-64 align-middle mx-auto mb-8"
              src="/images/BirthdayCake.png"
            />
            <div className="col-span-2 col-start-0">
              Be careful to budget carefully! You might have to pay for
              something unexpectedly!
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default BudgetRules;
