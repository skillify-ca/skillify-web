import { ReactNode } from "react";

export const FarmHouseTable = () => {
  return (
    <table className="shadow-md bg-white">
      <thead>
        <tr>
          <th className="bg-green-300 border border-black text-center w-40">
            Bedrooms
          </th>
          <th className="bg-green-300 border border-black text-center w-40">
            Bathrooms
          </th>
          <th className="bg-green-300 border border-black text-center w-40">
            Cost Per Month
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black text-center">1</td>
          <td className="border border-black text-center">1</td>
          <td className="border border-black text-center">$650</td>
        </tr>
        <tr>
          <td className="border border-black text-center">2</td>
          <td className="border border-black text-center">1</td>
          <td className="border border-black text-center">$750</td>
        </tr>
        <tr>
          <td className="border border-black text-center">3</td>
          <td className="border border-black text-center">2</td>
          <td className="border border-black text-center">$900</td>
        </tr>
        <tr>
          <td className="border border-black text-center">4</td>
          <td className="border border-black text-center">3</td>
          <td className="border border-black text-center">$1200</td>
        </tr>
      </tbody>
    </table>
  );
};

export const SuburbHouseTable = () => {
  return (
    <table className="shadow-md bg-white">
      <thead>
        <tr>
          <th className="bg-green-300 border border-black text-center w-40">
            Bedrooms
          </th>
          <th className="bg-green-300 border border-black text-center w-40">
            Bathrooms
          </th>
          <th className="bg-green-300 border border-black text-center w-40">
            Cost Per Month
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black text-center">1</td>
          <td className="border border-black text-center">1</td>
          <td className="border border-black text-center">$800</td>
        </tr>
        <tr>
          <td className="border border-black text-center">2</td>
          <td className="border border-black text-center">1</td>
          <td className="border border-black text-center">$900</td>
        </tr>
        <tr>
          <td className="border border-black text-center">3</td>
          <td className="border border-black text-center">2</td>
          <td className="border border-black text-center">$1300</td>
        </tr>
        <tr>
          <td className="border border-black text-center">4</td>
          <td className="border border-black text-center">3</td>
          <td className="border border-black text-center">$1600</td>
        </tr>
      </tbody>
    </table>
  );
};

export const ApartmentTable = () => {
  return (
    <table className="shadow-md bg-white">
      <thead>
        <tr>
          <th className="bg-green-300 border border-black text-center w-40">
            Bedrooms
          </th>
          <th className="bg-green-300 border border-black text-center w-40">
            Bathrooms
          </th>
          <th className="bg-green-300 border border-black text-center w-40">
            Cost Per Month
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black text-center">1</td>
          <td className="border border-black text-center">1</td>
          <td className="border border-black text-center">$550</td>
        </tr>
        <tr>
          <td className="border border-black text-center">2</td>
          <td className="border border-black text-center">1</td>
          <td className="border border-black text-center">$700</td>
        </tr>
        <tr>
          <td className="border border-black text-center">3</td>
          <td className="border border-black text-center">2</td>
          <td className="border border-black text-center">$850</td>
        </tr>
        <tr>
          <td className="border border-black text-center">4</td>
          <td className="border border-black text-center">3</td>
          <td className="border border-black text-center">$1100</td>
        </tr>
      </tbody>
    </table>
  );
};

export const CityLoftTable = () => {
  return (
    <table className="shadow-md bg-white">
      <thead>
        <tr>
          <th className="bg-green-300 border border-black text-center w-40">
            Bedrooms
          </th>
          <th className="bg-green-300 border border-black text-center w-40">
            Bathrooms
          </th>
          <th className="bg-green-300 border border-black text-center w-40">
            Cost Per Month
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black text-center">1</td>
          <td className="border border-black text-center">1</td>
          <td className="border border-black text-center">$700</td>
        </tr>
        <tr>
          <td className="border border-black text-center">2</td>
          <td className="border border-black text-center">1</td>
          <td className="border border-black text-center">$1000</td>
        </tr>
        <tr>
          <td className="border border-black text-center">3</td>
          <td className="border border-black text-center">2</td>
          <td className="border border-black text-center">$1500</td>
        </tr>
        <tr>
          <td className="border border-black text-center">4</td>
          <td className="border border-black text-center">3</td>
          <td className="border border-black text-center">$1800</td>
        </tr>
      </tbody>
    </table>
  );
};

export const ABplusCcompany = () => {
  return (
    <div>
      <div className="text-lg">AB + C Company</div>
      <table className="shadow-xl bg-white">
        <thead>
          <tr>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Package
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Number of Channels
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Cost Per Month
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black text-center">Basic</td>
            <td className="border border-black text-center">20</td>
            <td className="border border-black text-center">$19.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">Family</td>
            <td className="border border-black text-center">70</td>
            <td className="border border-black text-center">$54.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">T-100</td>
            <td className="border border-black text-center">130</td>
            <td className="border border-black text-center">$67.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">T-200</td>
            <td className="border border-black text-center">200</td>
            <td className="border border-black text-center">$82.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export const StreamingTvCompany = () => {
  return (
    <div>
      <div className="text-lg">Streaming TV Company</div>
      <table className="shadow-xl bg-white">
        <thead>
          <tr>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Package
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Number of Channels
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Cost Per Month
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black text-center">Choice</td>
            <td className="border border-black text-center">150</td>
            <td className="border border-black text-center">$39.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">Extra</td>
            <td className="border border-black text-center">210</td>
            <td className="border border-black text-center">$44.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">Ultimate</td>
            <td className="border border-black text-center">225</td>
            <td className="border border-black text-center">$59.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">Premier</td>
            <td className="border border-black text-center">285</td>
            <td className="border border-black text-center">$69.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const DishAndSpoonNetwork = () => {
  return (
    <div>
      <div className="text-lg">Dish and Spoon Network</div>
      <table className="shadow-l bg-white ">
        <thead>
          <tr>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Package
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Number of Channels
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Cost Per Month
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black text-center">Basic</td>
            <td className="border border-black text-center">150</td>
            <td className="border border-black text-center">$48.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">Ultra</td>
            <td className="border border-black text-center">210</td>
            <td className="border border-black text-center">$58.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">Ultra-X</td>
            <td className="border border-black text-center">225</td>
            <td className="border border-black text-center">$65.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">Super</td>
            <td className="border border-black text-center">285</td>
            <td className="border border-black text-center">$75.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const VintageWireless = () => {
  return (
    <div>
      <div className="text-lg">Vintage Wireless</div>
      <table className="shadow-l bg-white ">
        <thead>
          <tr>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Number of Phones
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Talk Only
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Talk and Text
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Talk, Text and Data (internet)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black text-center">1</td>
            <td className="border border-black text-center">$39.00</td>
            <td className="border border-black text-center">$59.00</td>
            <td className="border border-black text-center">$69.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">2</td>
            <td className="border border-black text-center">$59.00</td>
            <td className="border border-black text-center">$79.00</td>
            <td className="border border-black text-center">$89.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">3 or More</td>
            <td className="border border-black text-center">$69.00</td>
            <td className="border border-black text-center">$89.00</td>
            <td className="border border-black text-center">$99.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const SpeedyWireless = () => {
  return (
    <div className={"mt-10"}>
      <div className="text-lg">Speedy Wireless</div>
      <table className="shadow-l bg-white ">
        <thead>
          <tr>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Package
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Number of Channels
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Cost Per Month
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Cost Per Month
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black text-center">1</td>
            <td className="border border-black text-center">$45.00</td>
            <td className="border border-black text-center">$65.00</td>
            <td className="border border-black text-center">$83.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">2</td>
            <td className="border border-black text-center">$55.00</td>
            <td className="border border-black text-center">$75.00</td>
            <td className="border border-black text-center">$93.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">3 or More</td>
            <td className="border border-black text-center">$65.00</td>
            <td className="border border-black text-center">$85.00</td>
            <td className="border border-black text-center">$103.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const GroceryTable = () => {
  return (
    <div>
      <div className="text-lg">Shop Mart</div>
      <table className="shadow-l bg-white ">
        <thead>
          <tr>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Family Member
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Age
            </th>
            <th className="bg-green-300 border border-black text-center text-white w-40">
              Cost Per Month
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black text-center">Baby - Toddler</td>
            <td className="border border-black text-center">0-4 Years</td>
            <td className="border border-black text-center">$90.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">Child (Female)</td>
            <td className="border border-black text-center">5-15 Years</td>
            <td className="border border-black text-center">$100.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">Child (Male)</td>
            <td className="border border-black text-center">5-15 Years</td>
            <td className="border border-black text-center">$110.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">Adult (Male)</td>
            <td className="border border-black text-center">16+ Years</td>
            <td className="border border-black text-center">$120.00</td>
          </tr>
          <tr>
            <td className="border border-black text-center">Adult (Female)</td>
            <td className="border border-black text-center">16+ Years</td>
            <td className="border border-black text-center">$130.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
