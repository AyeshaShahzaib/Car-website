import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function Featured() {
  return (
    <div className="h-screen">
      <div className="flex justify-center ">
        <div className="flex justify-between items-center px-36 py-4 w-[95%]">
          <div>
            <h1 className="font-semibold text-xl text-[#434343]">
              Featured New Cars
            </h1>
          </div>
          <div>
            <h1 className="font-medium text-sm text-[#518ECB]">
              View All New Cars
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-screen">
        <div className="flex justify-start px-32 w-[95%]">
          <div className="px-4 py-3 border-b-4 border-[#518ECB] font-semibold">
            <h1>Popular</h1>
          </div>
          <div className="px-4 py-3 font-light">
            <h1>Upcoming</h1>
          </div>
          <div className="px-4 py-3 font-light">
            <h1>Newly Launched</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-evenly items-center py-2 w-[88%]">
          <Link href="car_details" target="_blank">
            <div className="h-[275px] w-[225px] border-2">
              <div>
                <img src="car_1.jpg" alt="Car Image" />
              </div>
              <div>
                <div className="flex justify-center text-[#233D7B] ">
                  <h1>Toyota Corolla</h1>
                </div>
                <div className="flex justify-center text-[#3EB549]">
                  <h1>PKR 59.7-75.5 lacs</h1>
                </div>
                <div className="flex justify-center items-center py-2">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="h-2 w-2 text-[#EF730F]"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="h-2 w-2 text-[#EF730F]"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="h-2 w-2 text-[#EF730F]"
                  />
                  <FontAwesomeIcon
                    icon={faRegularStar}
                    className="h-2 w-2 text-[#EF730F]"
                  />
                  <FontAwesomeIcon
                    icon={faRegularStar}
                    className="h-2 w-2 text-[#EF730F]"
                  />
                  <h1 className="px-2 text-[#7B8397] text-sm">621 Reviews</h1>
                </div>
              </div>
            </div>
          </Link>
          <Link href="car_details2" target="_blank">  
          <div className="h-[275px] w-[225px] border-2 ">
            <div>
              <img src="car_2.png" alt="Car Image" />
            </div>
            <div>
              <div className="flex justify-center text-[#233D7B]">
                <h1>Suzuki Alto</h1>
              </div>
              <div className="flex justify-center text-[#3EB549]">
                <h1>PKR 23.3-30.5 lacs</h1>
              </div>
              <div className="flex justify-center items-center py-2">
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <FontAwesomeIcon
                  icon={faRegularStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <FontAwesomeIcon
                  icon={faRegularStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <h1 className="px-2 text-[#7B8397] text-sm">199 Reviews</h1>
              </div>
            </div>
          </div>
          </Link>
          <Link href="car_details3" target="_blank"> 
          <div className="h-[275px] w-[225px] border-2">
            <div>
              <img src="car_3.jpg" alt="Car Image" />
            </div>
            <div>
              <div className="flex justify-center text-[#233D7B] ">
                <h1>Honda City</h1>
              </div>
              <div className="flex justify-center text-[#3EB549]">
                <h1>PKR 46.5-58.5 lacs</h1>
              </div>
              <div className="flex justify-center items-center py-2">
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <FontAwesomeIcon
                  icon={faRegularStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <FontAwesomeIcon
                  icon={faRegularStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <h1 className="px-2 text-[#7B8397] text-sm">458 Reviews</h1>
              </div>
            </div>
          </div>
          </Link>
          <Link href="car_details4" target="_blank">
          <div className="h-[275px] w-[225px] border-2">
            <div>
              <img src="car_4.jpg" alt="Car Image" />
            </div>
            <div>
              <div className="flex justify-center text-[#233D7B]">
                <h1>Honda Civic</h1>
              </div>
              <div className="flex justify-center text-[#3EB549]">
                <h1>PKR 86.6-99.0 lacs</h1>
              </div>
              <div className="flex justify-center items-center py-2">
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <FontAwesomeIcon
                  icon={faRegularStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <FontAwesomeIcon
                  icon={faRegularStar}
                  className="h-2 w-2 text-[#EF730F]"
                />
                <h1 className="px-2 text-[#7B8397] text-sm">357 Reviews</h1>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
